using System.Threading.Tasks;
using OSGB.Common.Interfaces;
using OSGB.Data.Entity;

namespace OSGB.Data.Common
{
    public interface IAuthRepository
    {
        IReturnResult<User> Login(string userName, string password);
        Task<IReturnResult<bool>> Logout(string userId);
        Task<IReturnResult<bool>> ForgotPassword(string userName, string password);
    }
}