using System;
using OSGB.Data.Common;

namespace OSGB.Data.Entity
{
    public class ServiceType : IEntity
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public DateTime ContractStartDate { get; set; }
        public DateTime ContractEndDate { get; set; }
        public string Details { get; set; }
        public DateTime Created { get; set; }
        public string Updated { get; set; }
        public string DocumentType => "serviceType";
    }
}