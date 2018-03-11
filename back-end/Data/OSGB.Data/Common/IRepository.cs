using System.Collections.Generic;
using System.Threading.Tasks;
using OSGB.Common.Interfaces;

namespace OSGB.Data.Common
{
    public interface IRepository<T, in TSt>
    {
        IReturnResult<bool> Create(T newObject);
        IReturnResult<IEnumerable<T>> ReadAll();
        Task<IReturnResult<T>> ReadById(TSt id);
        IReturnResult<bool> Update(T newObject);
        IReturnResult<bool> Delete(T newObject);
    }
}