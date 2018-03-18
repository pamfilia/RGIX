using Microsoft.Azure.Documents.Client;
using OSGB.Common.Mappers.Azure.Interfaces;
using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Data.Repository
{
    public class ProfileRepository : BaseReporsitory<Profile>
    {
        public ProfileRepository(DocumentClient documentClient, IDocumentResponseMapper documentResponseMapper) :
            base(documentClient, documentResponseMapper)
        {
            CollectionName = Collections.Profiles.ToString();
        }
    }
}