using PickAnAPI.Models.Requests;
using PickAnAPI.Models.Responses;
using PickAnAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace PickAnAPI.Controllers
{
    [RoutePrefix("api/users")]
    public class UserController : ApiController
    {
        readonly UserService _userService;
        private UserController ()
        {
            _userService = new UserService();
        }

        [HttpPost, Route("register")]
        public HttpResponseMessage Register(UserCreate user)
        {
            if(user == null)
            {
                ModelState.AddModelError("Error", "User cannot be null");
            }
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            else
            {
                int id = _userService.Register(user);
                return Request.CreateResponse(HttpStatusCode.OK, id);
            }
        }

        [HttpPost, Route("login")]
        public HttpResponseMessage Login(UserLogin user)
        {
            List<User> users = new List<User>();
            if (user == null)
            {
                ModelState.AddModelError("Error", "User cannot be null");
            }
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            else
            {
                users = _userService.Login(user);
            }
            if(users.Count == 0 || users.Count > 1)
            {
                return Request.CreateErrorResponse(HttpStatusCode.Unauthorized, "User not found");
            }
            else
            {
                HttpCookie myCookie = new HttpCookie("myCookie");
                myCookie.Values.Add("User", user.Username);
                myCookie.Expires = DateTime.Now.AddHours(12);
                HttpContext.Current.Response.Cookies.Add(myCookie);

                return Request.CreateResponse(HttpStatusCode.OK, "Logged In");
            }
        }
    }
}
