using System;
using OSGB.Data.Common;

namespace OSGB.Data.Entity
{
    public class Company : IEntity
    {
        public string Name { get; set; }
        public string DangerLevel { get; set; }
        public string Id { get; set; }
        public DateTime Created { get; set; }
        public string Updated { get; set; }
        public string DocumentType { get{return"company";} }
    }
}