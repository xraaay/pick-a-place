using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PickAnAPI.Models.Requests
{
    public class UserCreate
    {
        [Required, MaxLength(50)]
        public string Email { get; set; }
        [Required, MaxLength(20)]
        public string Password { get; set; }
        [Required, MaxLength(15)]
        public string Username { get; set; }
    }
}