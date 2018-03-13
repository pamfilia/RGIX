using System.Threading.Tasks;
using OSGB.Common.Interfaces;
using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Data.Repository
{
    public class AuthRepository:IAuthRepository
    {
        private readonly IUserRepository _useRepository;
        public AuthRepository(IUserRepository useRepository)
        {
            this._useRepository = useRepository;
        }
        public IReturnResult<User> Login(string userName, string password)
        {
            return _useRepository.IsUserExists(userName, password);
        }

        public Task<IReturnResult<bool>> Logout(string userId)
        {
            throw new System.NotImplementedException();
        }

        public Task<IReturnResult<bool>> ForgotPassword(string userName, string password)
        {
            throw new System.NotImplementedException();
        }
    }
}