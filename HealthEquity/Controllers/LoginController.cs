using HealthEquity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HealthEquity.Controllers
{
    public class LoginController : ApiController
    {
        // GET: api/Login
        public IEnumerable<LoginModel> Get()
        {
            return new LoginModel[]
            {
               new LoginModel { Name = "asdf", Email = "asdf@asdf", Password = "sadfsadf",
                    Age = 55, Gender = "Male", About = "asdfasdfasdf", Disabled = true,
                    OriginUrl = "http://www.google.com", Id = 1},
               new LoginModel { Name = "asdf2", Email = "asdf2@asdf2", Password = "sadfsadf",
                    Age = 65, Gender = "Female", About = "412342134231", Disabled = false,
                    OriginUrl = "http://www.amazon.com", Id = 2 }

            };
        }

        // GET: api/Login/5
        public LoginModel Get(int id)
        {
            if (id == 1)
            {
                return new LoginModel
                {
                    Name = "asdf",
                    Email = "asdf@asdf",
                    Password = "sadfsadf",
                    Age = 55,
                    Gender = "Male",
                    About = "asdfasdfasdf",
                    Disabled = true,
                    OriginUrl = "http://www.google.com",
                    Id = 1
                };
            }
            else if (id == 2)
            {
                return new LoginModel {
                    Name = "asdf2",
                    Email = "asdf2@asdf2",
                    Password = "sadfsadf",
                    Age = 65,
                    Gender = "Female",
                    About = "412342134231",
                    Disabled = false,
                    OriginUrl = "http://www.amazon.com",
                    Id = 2
                };
            }
            else
                throw new ArgumentOutOfRangeException("id", "lol");

        }

        // POST: api/Login
        public void Post([FromBody]LoginModel value)
        {
            //Save to DB

        }

        // PUT: api/Login/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Login/5
        public void Delete(int id)
        {
        }
    }
}
