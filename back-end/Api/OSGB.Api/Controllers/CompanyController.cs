using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Api.Controllers
{
    public class CompanyController:BaseController<Company>
    {
    public CompanyController(IRepository<Company> repository):base(repository)
    {
    }
    }
}
