
using System.Collections.Generic;
using System.Threading.Tasks;
using OSGB.Common.Interfaces;
using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Data.Repository
{
    public class ServiceTypeRepository : ICustomRepository<ServiceType>
    {
        public Task<IReturnResult<bool>> Create(ServiceType newObject)
        {
            throw new System.NotImplementedException();
        }

        public Task<IReturnResult<IEnumerable<ServiceType>>> ReadAll(int? page, string requestContinuation, int? limit)
        {
            throw new System.NotImplementedException();
        }

        public Task<IReturnResult<ServiceType>> ReadById(string id)
        {
            throw new System.NotImplementedException();
        }

        public Task<IReturnResult<bool>> Update(ServiceType newObject)
        {
            throw new System.NotImplementedException();
        }

        public Task<IReturnResult<bool>> Delete(string id)
        {
            throw new System.NotImplementedException();
        }
    }
}