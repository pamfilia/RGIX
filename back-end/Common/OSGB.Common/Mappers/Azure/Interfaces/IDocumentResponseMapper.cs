using System.Net;
using OSGB.Common.Enums;

namespace OSGB.Common.Mappers.Azure.Interfaces
{
    public interface IDocumentResponseMapper
    {
        (ResultType,string)  Identify(HttpStatusCode code);
    }
}