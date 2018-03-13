using System;
using System.Diagnostics;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Azure.Documents.Client;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using OSGB.Api.Common;
using OSGB.Api.Filters;
using OSGB.Common.Mappers.Azure;
using OSGB.Common.Mappers.Azure.Interfaces;
using OSGB.Data.Common;
using OSGB.Data.Entity;
using OSGB.Data.Repository;
using User = OSGB.Data.Entity.User;

namespace OSGB.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(jwtOpt =>
                {
                    jwtOpt.RequireHttpsMetadata = false;
                    jwtOpt.IncludeErrorDetails = false;
                    jwtOpt.SaveToken = true;
                    jwtOpt.SaveToken = true;
                    jwtOpt.Events = new JwtBearerEvents
                    {
                        OnChallenge = (e) =>
                        {
                            Debug.WriteLine("OnMessageReceived = > {0}", e.Error);
                            return Task.FromResult(0);
                        },
                        OnMessageReceived = (e) =>
                        {
                            Debug.WriteLine("OnMessageReceived = > {0}", e.Result);
                            return Task.FromResult(0);
                        },
                        OnTokenValidated = (e) =>
                        {
                            Debug.WriteLine("OnTokenValidated = > {0}", e.Result);
                            return Task.FromResult(0);
                        },
                        OnAuthenticationFailed = (e) =>
                        {
                            Debug.WriteLine("OnAuthenticationFailed = > {0}", e.Result);
                            return Task.FromResult(0);
                        }
                    };
                    jwtOpt.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidIssuer = Configuration["JwtIssuer"],
                        ValidateAudience = true,
                        ValidAudience = Configuration["JwtIssuer"],
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtKey"])),
                        ValidateLifetime = true,
                        ClockSkew = TimeSpan.Zero
                    };
                });


            services.Configure<JwtConfig>(jwtCfg =>
            {
                jwtCfg.JwtExpireDays = int.Parse(Configuration["JwtExpireDays"]);
                jwtCfg.JwtIssuer = Configuration["JwtIssuer"];
                jwtCfg.JwtKey = Configuration["JwtKey"];
            });

            //services.AddDbContext<AddressbookContext>();
            services.AddMvc(options =>
            {
                var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
                options.Filters.Add(new AuthorizeFilter(policy));
                options.Filters.Add(typeof(ValidateModelAttribute),1);
            });

            services.AddScoped(s =>
                new DocumentClient(new Uri(Configuration["EndpointUri"]), Configuration["PrimaryKey"]));

            services.AddScoped<IDocumentResponseMapper, DocumentResponseMapper>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddScoped<IRepository<User>, UserRepository>();
            services.AddScoped<IRepository<Nace>, NaceRepository>();
            services.AddScoped<Measurement.Filters.MeasureFilter>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseAuthentication();
            app.UseMvc();
        }
    }
}