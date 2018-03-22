using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.Documents.Linq;
using OSGB.Common.Classes;
using OSGB.Common.Constants;
using OSGB.Common.Enums;
using OSGB.Common.Extensions.Object;
using OSGB.Common.Interfaces;
using OSGB.Common.Mappers.Azure.Interfaces;
using OSGB.Data.Common;
using OSGB.Data.Constants;

namespace OSGB.Data.Repository
{
    public abstract class BaseReporsitory<T> : IRepository<T> where T : IEntity, new()
    {
        protected readonly DocumentClient DocumentClient;
        protected readonly IDocumentResponseMapper DocumentResponseMapper;
        private readonly string DocumentType;

        protected BaseReporsitory(DocumentClient documentClient, IDocumentResponseMapper documentResponseMapper)
        {
            DocumentClient = documentClient;
            CollectionName = Collections.Users.ToString();
            DocumentResponseMapper = documentResponseMapper;
            DocumentType = new T().DocumentType;
        }

        protected string CollectionName { get; set; }

        public async Task<IReturnResult<bool>> Create(T newObject)
        {
            var result = new ReturnResult<bool>();
            if (newObject.IsNullOrNot())
            {
                result.ResultValue = false;
                result.AddException(new Exception($"{nameof(newObject)} is null"));
                result.ResultType = ResultType.Failed;
                result.HumanReadableMessage.Add(HumanReadable.OopsSomethingWentWrong);
                return result;
            }

            await DocumentClient.CreateDocumentAsync(
                UriFactory.CreateDocumentCollectionUri(DatabaseInfo.DatabaseName, CollectionName),
                newObject).ContinueWith(t =>
            {
                if (t.IsFaulted)
                {
                    result.ResultValue = false;
                    result.AddException(t.Exception);
                    result.ResultType = ResultType.Failed;
                    result.HumanReadableMessage.Add(HumanReadable.OopsSomethingWentWrong);
                }
                else
                {
                    result.ResultValue = true;
                    result.ResultType = DocumentResponseMapper.Identify(t.Result.StatusCode).Item1;
                    result.HumanReadableMessage.Add(HumanReadable.RecordHasBeenCreated);
                }
            });
            return result;
        }

        public async Task<IReturnResult<IEnumerable<T>>> ReadAll(string requestContinuation, int limit)
        {
            if (!requestContinuation.IsNullOrNot())
                requestContinuation = Encoding.UTF8.GetString(Convert.FromBase64String(requestContinuation));
            var totalRecord = DocumentClient.CreateDocumentQuery<T>(
                UriFactory.CreateDocumentCollectionUri(DatabaseInfo.DatabaseName, CollectionName),
                new FeedOptions
                {
                    MaxItemCount = -1,
                    EnableCrossPartitionQuery = true
                }).Where(r => r.DocumentType == DocumentType).CountAsync();
            var t = Task.Run(async () =>
            {
                var query = DocumentClient.CreateDocumentQuery<T>(
                        UriFactory.CreateDocumentCollectionUri(DatabaseInfo.DatabaseName, CollectionName),
                        new FeedOptions
                        {
                            MaxItemCount = limit,
                            RequestContinuation = requestContinuation,
                            MaxBufferedItemCount = limit,
                            EnableCrossPartitionQuery = true
                        })
                    .Where(r => r.DocumentType == DocumentType)
                    .AsDocumentQuery();
                var results = new List<T>();
                await query.ExecuteNextAsync<T>().ContinueWith(it =>
                {
                    if (it.IsFaulted) return;

                    results.AddRange(it.Result);
                    requestContinuation = it.Result
                        .ResponseContinuation.IsNotNullCall(() => Convert.ToBase64String(
                            Encoding.UTF8.GetBytes(it.Result
                                .ResponseContinuation)));
                });

                return results;
            });

            var result = new ReturnResult<IEnumerable<T>>
            {
                ResultValue = await t,
                RequestContinuation = requestContinuation,
                TotalRecordCount = await totalRecord,
                ResultType = ResultType.Success
            };
            result.HumanReadableMessage.Add(HumanReadable.Acknowledged);
            return result;
        }

        public async Task<IReturnResult<T>> ReadById(string id)
        {
            var result = new ReturnResult<T>();
            await DocumentClient.ReadDocumentAsync<T>(
                    UriFactory.CreateDocumentUri(DatabaseInfo.DatabaseName, CollectionName, id))
                .ContinueWith(t =>
                {
                    if (t.IsFaulted)
                    {
                        result.AddException(t.Exception);
                        result.ResultType = ResultType.Failed;
                        result.HumanReadableMessage.Add(HumanReadable.OopsSomethingWentWrong);
                    }
                    else
                    {
                        var resultType = DocumentResponseMapper.Identify(t.Result.StatusCode).Item1;
                        result.ResultValue = t.Result.Document;
                        result.ResultType = resultType;
                        result.HumanReadableMessage.Add(HumanReadable.Acknowledged);
                    }
                });
            return result;
        }

        public async Task<IReturnResult<bool>> Update(string id, T newObject)
        {
            var result = new ReturnResult<bool>();
            if (newObject.IsNullOrNot())
            {
                result.ResultValue = false;
                result.AddException(new Exception($"{nameof(newObject)} is null"));
                result.ResultType = ResultType.Failed;
                result.HumanReadableMessage.Add(HumanReadable.OopsSomethingWentWrong);
                return result;
            }

            newObject.Id = id;
            await DocumentClient.UpsertDocumentAsync(
                UriFactory.CreateDocumentUri(DatabaseInfo.DatabaseName, CollectionName, id),
                newObject).ContinueWith(t =>
            {
                if (t.IsFaulted)
                {
                    result.ResultValue = false;
                    result.AddException(t.Exception);
                    result.ResultType = ResultType.Failed;
                    result.HumanReadableMessage.Add(HumanReadable.OopsSomethingWentWrong);
                }
                else
                {
                    result.ResultValue = true;
                    result.ResultType = DocumentResponseMapper.Identify(t.Result.StatusCode).Item1;
                    result.HumanReadableMessage.Add(HumanReadable.RecordHasBeenCreated);
                }
            });
            return result;
        }

        public async Task<IReturnResult<bool>> Delete(string id)
        {
            var result = new ReturnResult<bool>();
            await DocumentClient.DeleteDocumentAsync(
                    UriFactory.CreateDocumentUri(DatabaseInfo.DatabaseName, CollectionName, id))
                .ContinueWith(t =>
                {
                    if (t.IsFaulted)
                    {
                        result.ResultValue = false;
                        result.AddException(t.Exception);
                        result.ResultType = ResultType.Failed;
                        result.HumanReadableMessage.Add(HumanReadable.OopsSomethingWentWrong);
                    }
                    else
                    {
                        result.ResultValue = true;
                        result.ResultType = DocumentResponseMapper.Identify(t.Result.StatusCode).Item1;
                        result.HumanReadableMessage.Add(HumanReadable.RecordHasBeenDeleted);
                    }
                });
            return result;
        }
    }
}