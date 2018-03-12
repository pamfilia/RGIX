using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.Documents.Linq;
using OSGB.Common.Classes;
using OSGB.Common.Enums;
using OSGB.Common.Interfaces;
using OSGB.Data.Common;
using OSGB.Data.Constants;
using User = OSGB.Data.Entity.User;

namespace OSGB.Data.Repository
{
    public class UserRepository : BaseReporsitory<User, string>
    {
        private readonly IDocumentClient _documentClient;

        public UserRepository(IDocumentClient documentClient)
        {
            _documentClient = documentClient;
            CollectionName = Collections.Users.ToString();
        }

        public override async Task<IReturnResult<bool>> Create(User newObject)
        {
            return await Task.FromResult(new ReturnResult<bool> {ResultValue = false});
        }

        public override async Task<IReturnResult<IEnumerable<User>>> ReadAll()
        {
            var t = Task.Run(async () =>
            {
                var query = _documentClient.CreateDocumentQuery<User>(
                        UriFactory.CreateDocumentCollectionUri(Const.DatabaseName, this.CollectionName),
                        new FeedOptions {MaxItemCount = -1, EnableCrossPartitionQuery = true})
                    .AsDocumentQuery();

                var results = new List<User>();

                while (query.HasMoreResults)
                {
                    results.AddRange(await query.ExecuteNextAsync<User>());
                }

                return results;
            });

            return new ReturnResult<IEnumerable<User>>
            {
                ResultValue = await t,
                ResultType = ResultType.Success
            };
        }

        public override async Task<IReturnResult<User>> ReadById(string id)
        {
            var t = Task.Run(() =>
            {
                return _documentClient.CreateDocumentQuery<User>(
                        UriFactory.CreateDocumentCollectionUri(Const.DatabaseName, this.CollectionName),
                        new FeedOptions() {MaxItemCount = -1})
                    .AsEnumerable().FirstOrDefault(f => f.Id == id);
            });
            return new ReturnResult<User>
            {
                ResultValue = await t,
                ResultType = ResultType.Success
            };
        }
        
        public override async Task<IReturnResult<bool>> Update(User newObject)
        {
            return await Task.FromResult(new ReturnResult<bool> {ResultValue = false});
        }

        public override async Task<IReturnResult<bool>> Delete(User newObject)
        {
            return await Task.FromResult(new ReturnResult<bool> {ResultValue = false});
        }
    }
}