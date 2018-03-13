using Microsoft.Azure.Documents.Client;
using OSGB.Common.Mappers.Azure.Interfaces;
using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Data.Repository
{
    public class CompanyController: BaseReporsitory<Company>
    {
        public CompanyController(DocumentClient documentClient, IDocumentResponseMapper documentResponseMapper) :
            base(documentClient, documentResponseMapper)
        {
            CollectionName = Collections.Naces.ToString();
        }

    }
}