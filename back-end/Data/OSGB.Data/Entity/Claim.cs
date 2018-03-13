using System;
using System.Collections.Generic;
using OSGB.Data.Common;

namespace OSGB.Data.Entity
{
    public class Claim:IEntity
    {
        public string Id { get; set; }
        public Dictionary<string,ClaimItem<dynamic>> Items { get; set; }
        public DateTime Created { get; set; }
        public string Updated { get; set; }
    }
}