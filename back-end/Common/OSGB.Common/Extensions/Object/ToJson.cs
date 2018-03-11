using Newtonsoft.Json;

namespace OSGB.Common.Extensions.Object
{
    public static partial class ObjectExtensions
    {
        public static string ToJson(this object obj)
        {
            return JsonConvert.SerializeObject(
                obj,
                new JsonSerializerSettings()
                {
                    DateFormatHandling = DateFormatHandling.IsoDateFormat,
                    DateParseHandling = DateParseHandling.DateTime,
                    Formatting = Formatting.None,
                    DefaultValueHandling = DefaultValueHandling.Ignore,
                    MaxDepth = 3,
                    MissingMemberHandling = MissingMemberHandling.Ignore,
                    NullValueHandling = NullValueHandling.Include,
                });
        }
    }
}