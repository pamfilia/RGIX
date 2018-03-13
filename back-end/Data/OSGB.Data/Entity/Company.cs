using System;
using OSGB.Data.Common;

namespace OSGB.Data.Entity
{
    public class Company:IEntity
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string DangerLevel { get; set; }
        public DateTime Created { get; set; }
        public string Updated { get; set; }
    }
}