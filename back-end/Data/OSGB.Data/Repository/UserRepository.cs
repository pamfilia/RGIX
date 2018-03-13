using Microsoft.Azure.Documents.Client;
using OSGB.Common.Mappers.Azure.Interfaces;
using OSGB.Data.Common;
using User = OSGB.Data.Entity.User;

namespace OSGB.Data.Repository
{
    public class UserRepository: BaseReporsitory<User>
    {
        
        public UserRepository(DocumentClient documentClient,IDocumentResponseMapper documentResponseMapper) : 
            base(documentClient,documentResponseMapper)
        {
            CollectionName = Collections.Users.ToString();
        }

    }
}