using PickAnAPI.Models.Requests;
using PickAnAPI.Services;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace PickAnAPI.Controllers
{
    [RoutePrefix("api/yelp")]
    public class YelpController : ApiController
    {
        readonly YelpService _yelpService;
        private YelpController()
        {
            _yelpService = new YelpService();
        }

        [HttpPost, Route]
        public async Task<HttpResponseMessage> GetBusinesses(QueryString url)
        {
            return await _yelpService.GetBusinesses(url);
            //return Request.CreateResponse(HttpStatusCode.OK, response);

        }
    }
}
