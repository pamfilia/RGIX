using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using OSGB.Common.Enums;
using OSGB.Common.Interfaces;

namespace OSGB.Common.Classes
{
    public class ReturnResult<T> : IReturnResult<T>
    {
        public IEnumerable<string> Errors { get; private set; }
        public void AddException(Exception ex)
        {
            this.AddException(ex.Message);
        }

        public void AddException(string ex)
        {
            if (this.Errors == null)
            {
                this.Errors = new List<string>()
                {
                    ex
                };
            }

            this.Errors.Append(ex);
        }

        public ResultType ResultType { get; set; }
        public T ResultValue { get; set; }
    }
}