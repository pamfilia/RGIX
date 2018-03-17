using System;
using System.Collections.Generic;
using OSGB.Data.Common;

namespace OSGB.Data.Entity
{
    public class Claim : IEntity
    {
        public Dictionary<string, ClaimItem<dynamic>> Items { get; set; }
        public string Id { get; set; }
        public DateTime Created { get; set; }
        public string Updated { get; set; }
    }
}