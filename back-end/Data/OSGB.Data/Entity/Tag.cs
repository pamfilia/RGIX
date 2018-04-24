using Newtonsoft.Json;

namespace OSGB.Data.Entity
{
    public class Tag
    {
        [JsonProperty(PropertyName = "display")] 
        public string Text { get; set; }
        [JsonProperty(PropertyName = "value")]
        public string Value { get; set; }
    }
}