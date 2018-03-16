using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using OSGB.Common.Enums;

namespace OSGB.Common.Interfaces
{
    public interface IReturnResult<T>
    {
        [JsonIgnore]
        IEnumerable<string> Errors { get;}
        void AddException(Exception ex);
        void AddException(ModelStateDictionary ex);
        void AddException(string ex);
        ResultType ResultType { get; set; }
        T ResultValue { get; set; }
        string RequestContinuation { get; set; }
        List<string> HumanReadableMessage { get; set; }
    }
}