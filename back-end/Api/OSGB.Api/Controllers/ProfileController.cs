using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Api.Controllers
{
    public class ProfileController : BaseController<Profile>
    {
        public ProfileController(IRepository<Profile> repository) : base(repository)
        {
        }
    }
}