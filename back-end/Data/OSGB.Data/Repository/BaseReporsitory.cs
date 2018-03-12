using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using OSGB.Common.Interfaces;
using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Data.Repository
{
    public abstract class BaseReporsitory<T,TSt> : IRepository<T,TSt>
    {
        protected string CollectionName { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
        public abstract Task<IReturnResult<bool>> Create(T newObject);
        public abstract Task<IReturnResult<IEnumerable<T>>> ReadAll();
        public abstract Task<IReturnResult<T>> ReadById(TSt id);
        public abstract Task<IReturnResult<bool>> Update(T newObject);
        public abstract Task<IReturnResult<bool>> Delete(T newObject);
    }
}