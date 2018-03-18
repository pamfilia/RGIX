using System;
using Newtonsoft.Json;

namespace OSGB.Data.Common
{
    public interface IEntity
    {
        [JsonProperty(PropertyName = "id")] string Id { get; set; }

        [JsonProperty(PropertyName = "cr_ts")] DateTime Created { get; set; }

        [JsonProperty(PropertyName = "_ts")] string Updated { get; set; }
    }
}