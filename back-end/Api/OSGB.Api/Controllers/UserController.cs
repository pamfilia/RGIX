using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OSGB.Common.Enums;
using OSGB.Common.Extensions.Object;
using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Api.Controllers
{
    [ServiceFilter(typeof(Measurement.Filters.MeasureFilter))]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private IRepository<User, string> _repository;

        public UserController(IRepository<User, string> repository)
        {
            _repository = repository;
        }

        // GET api/values
        [HttpGet]
        public async Task<JsonResult> Get()
        {
            var result = await _repository.ReadAll();
            return Json(result.ResultType == ResultType.Success ? result.ResultValue : null);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<JsonResult> Get(string id)
        {
            var result =  await _repository.ReadById(id);
            return result.ResultType == ResultType.Success ? Json(result.ResultValue) : Json(result.Errors);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}