using OSGB.Common.Interfaces;
using OSGB.Data.Entity;

namespace OSGB.Data.Common
{
    public interface IUserRepository
    {
        IReturnResult<User> IsUserExists(string userName,string password);   
    }
}