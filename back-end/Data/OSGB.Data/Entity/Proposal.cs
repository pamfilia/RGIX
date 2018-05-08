using System;
using System.Collections.Generic;
using OSGB.Data.Common;

namespace OSGB.Data.Entity
{
    public class Proposal:IEntity
    {
        public string Id { get; set; }
        public string Proposer { get; set; }
        public DateTime ProposalDate { get; set; }
        public List<ServiceType> ServiceTypes { get; set; }
        public DateTime Created { get; set; }
        public string Updated { get; set; }
        public string DocumentType => "proposal";
    }
}