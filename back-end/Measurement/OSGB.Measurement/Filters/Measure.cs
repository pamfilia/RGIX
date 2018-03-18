using System;
using Microsoft.AspNetCore.Mvc.Filters;

namespace OSGB.Measurement.Filters
{
    public class MeasureFilter : ActionFilterAttribute
    {
        private DateTime _startTime;
        private DateTime _stopTime;

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            _startTime = DateTime.Now;
            base.OnActionExecuting(context);
        }

        public override void OnResultExecuting(ResultExecutingContext context)
        {
            _stopTime = DateTime.Now;
            context.HttpContext.Response.Headers.Add("etime-1", (_stopTime - _startTime).Milliseconds.ToString());
            base.OnResultExecuting(context);
        }

        public override void OnResultExecuted(ResultExecutedContext context)
        {
            _stopTime = DateTime.Now;
            Console.WriteLine("{0}:etime-2:{1}", context.Controller, (_stopTime - _startTime).Milliseconds);
            base.OnResultExecuted(context);
        }
    }
}