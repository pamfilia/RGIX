using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Api.Controllers
{
    public class RoleController : BaseController<Role>
    {
        public RoleController(IRepository<Role> repository) : base(repository)
        {
        }
    }
}