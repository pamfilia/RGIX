using Microsoft.AspNetCore.Mvc;
using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Api.Controllers
{
    public class ProposalController : BaseController<Proposal>
    {
        public ProposalController(IRepository<Proposal> repository) : base(repository)
        {
        }
    }
}