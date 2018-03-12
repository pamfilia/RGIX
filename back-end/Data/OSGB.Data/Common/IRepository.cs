using System.Collections.Generic;
using System.Threading.Tasks;
using OSGB.Common.Interfaces;

namespace OSGB.Data.Common
{
    public interface IRepository<T, in TSt>
    {
        Task<IReturnResult<bool>> Create(T newObject);
        Task<IReturnResult<IEnumerable<T>>> ReadAll();
        Task<IReturnResult<T>> ReadById(TSt id);
        Task<IReturnResult<bool>> Update(T newObject);
        Task<IReturnResult<bool>> Delete(T newObject);
    }
}