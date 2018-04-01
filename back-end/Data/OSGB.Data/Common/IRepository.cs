using System.Collections.Generic;
using System.Threading.Tasks;
using OSGB.Common.Interfaces;

namespace OSGB.Data.Common
{
    public interface IRepository<T>
    {
        Task<IReturnResult<bool>> Create(T newObject);
        Task<IReturnResult<IEnumerable<T>>> ReadAll(int? page, string requestContinuation, int? limit);
        Task<IReturnResult<T>> ReadById(string id);
        Task<IReturnResult<bool>> Update(T newObject);
        Task<IReturnResult<bool>> Delete(string id);
    }
}