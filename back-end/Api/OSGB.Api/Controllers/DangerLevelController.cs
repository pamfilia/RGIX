using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Api.Controllers
{
    public class DangerLevelController: BaseController<DangerLevel>
    {
        public DangerLevelController(IRepository<DangerLevel> repository):base(repository)
        {
        }
    }
}
