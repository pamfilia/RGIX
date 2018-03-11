using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using OSGB.Data.Common;

namespace OSGB.Data.Entity
{
    public class User:IEntity
    {
        [JsonProperty(PropertyName = "user_name")]
        public string UserName { get; set; }
        [JsonProperty(PropertyName = "password")]
        public string Password { get; set; }
        [JsonIgnore]
        public DateTime LastLogin { get; set; }
        [JsonIgnore]
        public IReadOnlyList<Profile> Profiles { get; internal set;}
        [JsonIgnore]
        public IReadOnlyList<Claim> Claims { get; internal set;}
        [JsonIgnore]
        public bool IsLocked { get; set; }
        public string Id { get; set; }
        public DateTime Created { get; set; }
        public string Updated { get; set; }
    }
}