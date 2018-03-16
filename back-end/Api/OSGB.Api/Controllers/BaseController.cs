using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OSGB.Data.Common;

namespace OSGB.Api.Controllers
{
    [ServiceFilter(typeof(Measurement.Filters.MeasureFilter))]
    [Route("api/[controller]")]
    public class BaseController<T>:Controller
    {
        private readonly IRepository<T> _repository;

        public BaseController(IRepository<T> repository)
        {
            _repository = repository;
        }

        // GET api/values
        [HttpGet]
        public async Task<JsonResult> Get([FromQuery] string rc,int l=10)
        {
            var result = await _repository.ReadAll(rc,l);
            return Json(result);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<JsonResult> Get(string id)
        {
            var result =  await _repository.ReadById(id);
            return Json(result);
        }

        // POST api/values
        [HttpPost]
        public async Task<JsonResult> Post([FromBody] T value)
        {
            var result =  await _repository.Create(value);
            return Json(result);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<JsonResult> Put(string id, [FromBody] T value)
        {
            var result =  await _repository.Update(id,value);
            return Json(result);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<JsonResult>  Delete(string id)
        {
            var result =  await _repository.Delete(id);
            return Json(result);
        }
    }
}