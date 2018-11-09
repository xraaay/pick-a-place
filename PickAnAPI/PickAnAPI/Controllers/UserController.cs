using PickAnAPI.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PickAnAPI.Controllers
{
    [RoutePrefix("api/users")]
    public class UserController : ApiController
    {
        public HttpResponseMessage Register(UserCreate user)
        {
            if(user == null)
            {
                ModelState.AddModelError("Error", "User cannot be null");
            }
            else if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            else
            {

            }
        }
    }
}
