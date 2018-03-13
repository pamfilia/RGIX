using System;
using OSGB.Data.Common;

namespace OSGB.Data.Entity
{
    public class DangerLevel:IEntity
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Definition { get; set; }
        public DateTime Created { get; set; }
        public string Updated { get; set; }
    }
}