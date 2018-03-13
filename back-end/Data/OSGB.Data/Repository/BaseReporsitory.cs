using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.Documents.Linq;
using Microsoft.Azure.Documents.SystemFunctions;
using OSGB.Common.Classes;
using OSGB.Common.Constants;
using OSGB.Common.Enums;
using OSGB.Common.Interfaces;
using OSGB.Common.Mappers.Azure.Interfaces;
using OSGB.Data.Common;
using OSGB.Data.Constants;
using OSGB.Data.Entity;

namespace OSGB.Data.Repository
{
    public abstract class BaseReporsitory<T> : IRepository<T> where T : IEntity
    {
        protected string CollectionName { get; set; }
        private readonly DocumentClient _documentClient;
        private readonly IDocumentResponseMapper _documentResponseMapper;

        protected BaseReporsitory(DocumentClient documentClient, IDocumentResponseMapper documentResponseMapper)
        {
            _documentClient = documentClient;
            CollectionName = Collections.Users.ToString();
            _documentResponseMapper = documentResponseMapper;
        }

        public async Task<IReturnResult<bool>> Create(T newObject)
        {
            var result = new ReturnResult<bool>();
            if (newObject.IsNull())
            {
                result.ResultValue = false;
                result.AddException(new Exception($"{nameof(newObject)} is null"));
                result.ResultType = ResultType.Failed;
                result.HumanReadableMessage = HumanReadable.OopsSomethingWentWrong;
                return result;
            }

            await _documentClient.CreateDocumentAsync(
                UriFactory.CreateDocumentCollectionUri(DatabaseInfo.DatabaseName, this.CollectionName),
                newObject).ContinueWith(t =>
            {
                if (t.IsFaulted)
                {
                    result.ResultValue = false;
                    result.AddException(t.Exception);
                    result.ResultType = ResultType.Failed;
                    result.HumanReadableMessage = HumanReadable.OopsSomethingWentWrong;
                }
                else
                {
                    result.ResultValue = true;
                    result.ResultType = _documentResponseMapper.Identify(t.Result.StatusCode).Item1;
                    result.HumanReadableMessage = HumanReadable.RecordHasBeenCreated;
                }
            });
            return result;
        }

        public async Task<IReturnResult<IEnumerable<T>>> ReadAll()
        {
            var t = Task.Run(async () =>
            {
                var query = _documentClient.CreateDocumentQuery<T>(
                        UriFactory.CreateDocumentCollectionUri(DatabaseInfo.DatabaseName, this.CollectionName),
                        new FeedOptions {MaxItemCount = -1, EnableCrossPartitionQuery = true})
                    .AsDocumentQuery();

                var results = new List<T>();

                while (query.HasMoreResults)
                {
                    results.AddRange(await query.ExecuteNextAsync<T>());
                }

                return results;
            });

            return new ReturnResult<IEnumerable<T>>
            {
                ResultValue = await t,
                ResultType = ResultType.Success,
                HumanReadableMessage = HumanReadable.Acknowledged
            };
        }

        public async Task<IReturnResult<T>> ReadById(string id)
        {
            var result = new ReturnResult<T>();
            await _documentClient.ReadDocumentAsync<T>(
                    UriFactory.CreateDocumentUri(DatabaseInfo.DatabaseName, CollectionName, id.ToString()))
                .ContinueWith((t) =>
                {
                    if (t.IsFaulted)
                    {
                        result.AddException(t.Exception);
                        result.ResultType = ResultType.Failed;
                        result.HumanReadableMessage = HumanReadable.OopsSomethingWentWrong;
                    }
                    else
                    {
                        var resultType = _documentResponseMapper.Identify(t.Result.StatusCode).Item1;
                        result.ResultValue = t.Result.Document;
                        result.ResultType = resultType;
                        result.HumanReadableMessage = HumanReadable.Acknowledged;
                    }
                });
            return result;
        }

        public async Task<IReturnResult<bool>> Update(string id, T newObject)
        {
            var result = new ReturnResult<bool>();
            if (newObject.IsNull())
            {
                result.ResultValue = false;
                result.AddException(new Exception($"{nameof(newObject)} is null"));
                result.ResultType = ResultType.Failed;
                result.HumanReadableMessage = HumanReadable.OopsSomethingWentWrong;
                return result;
            }

            newObject.Id = id.ToString();
            await _documentClient.UpsertDocumentAsync(
                UriFactory.CreateDocumentUri(DatabaseInfo.DatabaseName, CollectionName, id.ToString()),
                newObject).ContinueWith(t =>
            {
                if (t.IsFaulted)
                {
                    result.ResultValue = false;
                    result.AddException(t.Exception);
                    result.ResultType = ResultType.Failed;
                    result.HumanReadableMessage = HumanReadable.OopsSomethingWentWrong;
                }
                else
                {
                    result.ResultValue = true;
                    result.ResultType = _documentResponseMapper.Identify(t.Result.StatusCode).Item1;
                    result.HumanReadableMessage = HumanReadable.RecordHasBeenCreated;
                }
            });
            return result;
        }

        public async Task<IReturnResult<bool>> Delete(string id)
        {
            var result = new ReturnResult<bool>();
            await _documentClient.DeleteDocumentAsync(
                    UriFactory.CreateDocumentUri(DatabaseInfo.DatabaseName, CollectionName, id.ToString()))
                .ContinueWith((t) =>
                {
                    if (t.IsFaulted)
                    {
                        result.ResultValue = false;
                        result.AddException(t.Exception);
                        result.ResultType = ResultType.Failed;
                        result.HumanReadableMessage = HumanReadable.OopsSomethingWentWrong;
                    }
                    else
                    {
                        result.ResultValue = true;
                        result.ResultType = _documentResponseMapper.Identify(t.Result.StatusCode).Item1;
                        result.HumanReadableMessage = HumanReadable.RecordHasBeenDeleted;
                    }
                });
            return result;
        }
    }
}