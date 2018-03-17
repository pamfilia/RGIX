using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Api.Controllers
{
    public class NaceController : BaseController<Nace>
    {
        public NaceController(IRepository<Nace> repository) : base(repository)
        {
        }
    }
}