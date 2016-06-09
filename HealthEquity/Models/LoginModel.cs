using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HealthEquity.Models
{
    public class LoginModel
    {
        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public uint Age { get; set; }

        public string Gender { get; set; }

        public string About { get; set; }

        #region Hidden Fields
        public int Id { get; set; }

        public string OriginUrl { get; set; }

        public bool Disabled { get; set; }
        #endregion Hidden Fields
    }

}