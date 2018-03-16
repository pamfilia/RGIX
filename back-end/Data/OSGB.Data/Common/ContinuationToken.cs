using Newtonsoft.Json;

namespace OSGB.Data.Common
{
    public class ContinuationToken
    {
        [JsonProperty("token")] public string Token { get; set; }
    }
}