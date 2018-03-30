using System;
using OSGB.Data.Common;

namespace OSGB.Data.Entity
{
    public class Company : IEntity
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string DangerLevel { get; set; }
        public string Address { get; set; }
        public string Provience { get; set; }
        public string City { get; set; }
        public DateTime Created { get; set; }
        public string Updated { get; set; }
        public string DocumentType => "company";
    }
}