using System;
using System.Collections.Generic;
using System.Net;
using OSGB.Common.Enums;
using OSGB.Common.Mappers.Azure.Interfaces;

namespace OSGB.Common.Mappers.Azure
{
    public class DocumentResponseMapper:IDocumentResponseMapper
    {
        private static readonly Dictionary<HttpStatusCode,string> MappedData = 
            new Dictionary<HttpStatusCode, string>()
            {
                {HttpStatusCode.Accepted,""},
                {HttpStatusCode.Ambiguous,""},
                {HttpStatusCode.BadGateway,""},
                {HttpStatusCode.BadRequest,""},
                {HttpStatusCode.Conflict,""},
                {HttpStatusCode.Continue,""},
                {HttpStatusCode.Created,""},
                {HttpStatusCode.ExpectationFailed,""},
                {HttpStatusCode.Forbidden,""},
                {HttpStatusCode.GatewayTimeout,""},
                {HttpStatusCode.Gone,""},
                {HttpStatusCode.HttpVersionNotSupported,""},
                {HttpStatusCode.InternalServerError,""},
                {HttpStatusCode.LengthRequired,""},
                {HttpStatusCode.MethodNotAllowed,""},
                {HttpStatusCode.Moved,""},
                {HttpStatusCode.NoContent,""},
                {HttpStatusCode.NonAuthoritativeInformation,""},
                {HttpStatusCode.NotAcceptable,""},
                {HttpStatusCode.NotFound,""},
                {HttpStatusCode.NotImplemented,""},
                {HttpStatusCode.NotModified,""},
                {HttpStatusCode.OK,"OK"},
                {HttpStatusCode.PartialContent,""},
                {HttpStatusCode.PaymentRequired,""},
                {HttpStatusCode.PreconditionFailed,""},
                {HttpStatusCode.ProxyAuthenticationRequired,""},
                {HttpStatusCode.Redirect,""},
                {HttpStatusCode.RedirectMethod,""},
                {HttpStatusCode.RequestedRangeNotSatisfiable,""},
                {HttpStatusCode.RequestEntityTooLarge,""},
                {HttpStatusCode.RequestTimeout,""},
                {HttpStatusCode.RequestUriTooLong,""},
                {HttpStatusCode.ResetContent,""},
                {HttpStatusCode.ServiceUnavailable,""},
                {HttpStatusCode.SwitchingProtocols,""},
                {HttpStatusCode.TemporaryRedirect,""},
                {HttpStatusCode.Unauthorized,""},
                {HttpStatusCode.UnsupportedMediaType,""},
                {HttpStatusCode.Unused,""},
                {HttpStatusCode.UpgradeRequired,""},
                {HttpStatusCode.UseProxy,""}
            };
        
        public (ResultType,string) Identify(HttpStatusCode code)
        {
            MappedData.TryGetValue(code, out var v);
            switch (code)
            {
                case HttpStatusCode.Accepted:
                    break;
                case HttpStatusCode.Ambiguous:
                    break;
                case HttpStatusCode.BadGateway:
                    break;
                case HttpStatusCode.BadRequest:
                    break;
                case HttpStatusCode.Conflict:
                    break;
                case HttpStatusCode.Continue:
                    break;
                case HttpStatusCode.Created:
                    break;
                case HttpStatusCode.ExpectationFailed:
                    break;
                case HttpStatusCode.Forbidden:
                    break;
                case HttpStatusCode.Found:
                    break;
                case HttpStatusCode.GatewayTimeout:
                    break;
                case HttpStatusCode.Gone:
                    break;
                case HttpStatusCode.HttpVersionNotSupported:
                    break;
                case HttpStatusCode.InternalServerError:
                    break;
                case HttpStatusCode.LengthRequired:
                    break;
                case HttpStatusCode.MethodNotAllowed:
                    break;
                case HttpStatusCode.Moved:
                    break;
                case HttpStatusCode.NoContent:
                    break;
                case HttpStatusCode.NonAuthoritativeInformation:
                    break;
                case HttpStatusCode.NotAcceptable:
                    break;
                case HttpStatusCode.NotFound:
                    break;
                case HttpStatusCode.NotImplemented:
                    break;
                case HttpStatusCode.NotModified:
                    break;
                case HttpStatusCode.OK:
                    return (ResultType.Success,v);
                    break;
                case HttpStatusCode.PartialContent:
                    break;
                case HttpStatusCode.PaymentRequired:
                    break;
                case HttpStatusCode.PreconditionFailed:
                    break;
                case HttpStatusCode.ProxyAuthenticationRequired:
                    break;
                case HttpStatusCode.RedirectKeepVerb:
                    break;
                case HttpStatusCode.RedirectMethod:
                    break;
                case HttpStatusCode.RequestedRangeNotSatisfiable:
                    break;
                case HttpStatusCode.RequestEntityTooLarge:
                    break;
                case HttpStatusCode.RequestTimeout:
                    break;
                case HttpStatusCode.RequestUriTooLong:
                    break;
                case HttpStatusCode.ResetContent:
                    break;
                case HttpStatusCode.ServiceUnavailable:
                    break;
                case HttpStatusCode.SwitchingProtocols:
                    break;
                case HttpStatusCode.Unauthorized:
                    break;
                case HttpStatusCode.UnsupportedMediaType:
                    break;
                case HttpStatusCode.Unused:
                    break;
                case HttpStatusCode.UpgradeRequired:
                    break;
                case HttpStatusCode.UseProxy:
                    break;
                default:
                    throw new ArgumentOutOfRangeException(nameof(code), code, null);
            }
            return (ResultType.Success,v);
        }
    }
}