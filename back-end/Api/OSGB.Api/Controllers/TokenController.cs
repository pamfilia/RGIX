using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Documents.SystemFunctions;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using OSGB.Api.Common;
using OSGB.Api.Models;
using OSGB.Common.Extensions.Object;
using OSGB.Data.Common;

namespace OSGB.Api.Controllers
{
    [ServiceFilter(typeof(Measurement.Filters.MeasureFilter))]
    [Route("api/[controller]")]
    public class TokenController : Controller
    {
        private readonly IAuthRepository _authRepository;
        private readonly JwtConfig _jwConfig;

        public TokenController(IAuthRepository authRepository,IOptions<JwtConfig> jwtSettings)
        {
            this._authRepository = authRepository;
            _jwConfig = jwtSettings.Value;
        }

        [HttpPost, AllowAnonymous]
        public JsonResult Get([FromForm] ApplicationUser applicationUser)
        {   var currentUser = _authRepository.Login(applicationUser.UserName, applicationUser.Password);

            if (currentUser.ResultValue.IsNullOrNot())
                return Json(Unauthorized());

            var tokenString = BuildToken(applicationUser.UserName);
            return Json(new {token = tokenString});
        }


        private string BuildToken(string userName)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, userName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this._jwConfig.JwtKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                this._jwConfig.JwtIssuer,
                this._jwConfig.JwtIssuer,
                claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}