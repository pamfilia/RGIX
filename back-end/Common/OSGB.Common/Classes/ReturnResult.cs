using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using OSGB.Common.Enums;
using OSGB.Common.Interfaces;

namespace OSGB.Common.Classes
{
    public class ReturnResult<T> : IReturnResult<T>
    {
        public IEnumerable<string> Errors { get; private set; }

        public ReturnResult()
        {
            this.HumanReadableMessage = new List<string>();
        }

        public void AddException(Exception ex)
        {
            this.AddException(ex.Message);
        }

        public void AddException(ModelStateDictionary ex)
        {
            new SerializableError(ex).ToList().ForEach(t => { this.AddException(((string[]) t.Value)[0]); });
        }

        public void AddException(string ex)
        {
            this.HumanReadableMessage.Add(ex);
            if (this.Errors == null)
            {
                this.Errors = new List<string>()
                {
                    ex
                };
                return;
            }

            ((List<string>) this.Errors).Add(ex);
        }

        public ResultType ResultType { get; set; }
        public T ResultValue { get; set; }
        public string RequestContinuation { get; set; }
        public List<string> HumanReadableMessage { get; set; }
    }
}