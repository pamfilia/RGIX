using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Api.Controllers
{
    public class UserController : BaseController<User>
    {
        public UserController(IRepository<User> repository) : base(repository)
        {
        }
    }
}