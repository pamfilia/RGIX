using System;
using OSGB.Data.Common;

namespace OSGB.Data.Entity
{
    public class Nace : IEntity
    {
        public string Code { get; set; }
        public string Definition { get; set; }
        public string Id { get; set; }
        public DateTime Created { get; set; }
        public string Updated { get; set; }
        public string DocumentType => "nace";
    }
}