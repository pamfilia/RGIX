using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using OSGB.Data.Common;

namespace OSGB.Data.Entity
{
    public class Company : IEntity
    {
        public string Id { get; set; }
        public string IdentityNumber { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public int DangerLevel { get; set; }
        public string Address { get; set; }
        public string Provience { get; set; }
        public string City { get; set; }
        [JsonProperty(NullValueHandling=NullValueHandling.Ignore)]
        public List<Tag> Keywords { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string LatLong { get; set; }
        public string TaxOffice { get; set; }
        public string TaxNumber { get; set; }
        public int TotalPersonalCount { get; set; }
        public List<ServiceType> ServiceTypes { get; set; }
        public DateTime Created { get; set; }
        public string Updated { get; set; }
        public string DocumentType => "company";
    }
}