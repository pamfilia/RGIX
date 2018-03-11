using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
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
        private IDocumentClient _documentClient;

        public UserRepository(IDocumentClient documentClient)
        {
            _documentClient = documentClient;
            this.CollectionName = Collections.Users.ToString();
        }

        public override IReturnResult<bool> Create(User newObject)
        {
            throw new System.NotImplementedException();
        }

        public override IReturnResult<IEnumerable<User>> ReadAll()
        {
            throw new System.NotImplementedException();
        }

        public override async Task<IReturnResult<User>> ReadById(string id)
        {
            return await Task.FromResult(new ReturnResult<User>
            {
                ResultValue = this._documentClient.CreateDocumentQuery<User>(
                        UriFactory.CreateDocumentCollectionUri(Const.DatabaseName, this.CollectionName),
                        new FeedOptions() {MaxItemCount = -1})
                    .AsEnumerable().FirstOrDefault(f => f.Id == id),
                ResultType = ResultType.Success
            });
        }

        public override IReturnResult<bool> Update(User newObject)
        {
            throw new System.NotImplementedException();
        }

        public override IReturnResult<bool> Delete(User newObject)
        {
            throw new System.NotImplementedException();
        }
    }
}