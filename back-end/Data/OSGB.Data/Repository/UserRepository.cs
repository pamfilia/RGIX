using System;
using System.Linq;
using Microsoft.Azure.Documents.Client;
using OSGB.Common.Classes;
using OSGB.Common.Constants;
using OSGB.Common.Enums;
using OSGB.Common.Extensions.Object;
using OSGB.Common.Interfaces;
using OSGB.Common.Mappers.Azure.Interfaces;
using OSGB.Data.Common;
using OSGB.Data.Constants;
using OSGB.Data.Entity;

namespace OSGB.Data.Repository
{
    public class UserRepository : BaseReporsitory<User>, IUserRepository
    {
        public UserRepository(DocumentClient documentClient, IDocumentResponseMapper documentResponseMapper) :
            base(documentClient, documentResponseMapper)
        {
            CollectionName = Collections.Common.ToString();
        }

        public IReturnResult<User> IsUserExists(string userName, string password)
        {
            var result = new ReturnResult<User>();
            var queryResult = DocumentClient.CreateDocumentQuery<User>(
                    UriFactory.CreateDocumentCollectionUri(DatabaseInfo.DatabaseName, CollectionName))
                .AsEnumerable()
                .FirstOrDefault(u => u.UserName == userName && u.Password == password);

            if (queryResult.IsNullOrNot())
            {
                result.AddException(new Exception("User not found"));
                result.ResultType = ResultType.Failed;
                result.HumanReadableMessage.Add(HumanReadable.OopsSomethingWentWrong);
            }
            else
            {
                result.ResultValue = queryResult;
                result.ResultType = ResultType.Success;
                result.HumanReadableMessage.Add(HumanReadable.Acknowledged);
            }

            return result;
        }
    }
}