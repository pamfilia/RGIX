using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using OSGB.Common.Enums;
using OSGB.Common.Extensions.Object;
using OSGB.Data.Common;
using OSGB.Data.Entity;

namespace OSGB.Api.Controllers
{
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
        public IEnumerable<string> Get()
        {
            return new string[] {"value1", "value2"};
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(string id)
        {
            var ts = DateTime.Now; 
            var result = this._repository.ReadById(id);
            var ts1 = DateTime.Now;
            return result.Result.ResultType == ResultType.Success ? result.Result.ResultValue.ToJson()+"ts:" + (ts1-ts).Milliseconds +"ms": null;
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