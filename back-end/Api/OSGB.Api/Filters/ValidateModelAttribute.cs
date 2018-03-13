using System.Net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Rest;
using OSGB.Common.Classes;
using OSGB.Common.Extensions.Object;

namespace OSGB.Api.Filters
{
    public class ValidateModelAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                var result = new ReturnResult<bool>
                {
                    ResultValue = false
                };
                result.AddException(context.ModelState);
                context.Result = new JsonResult(result);
                return;
            }
            base.OnActionExecuting(context);
        }
 
    }
}