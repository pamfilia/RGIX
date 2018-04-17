using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Api.Controllers
{
    public class InterviewController: BaseController<Interview>
    {
        public InterviewController(IRepository<Interview> repository) : base(repository)
        {
        }
    }
}