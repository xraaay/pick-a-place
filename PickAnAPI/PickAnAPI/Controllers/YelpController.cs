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
using String = PickAnAPI.Models.Requests.String;

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
        public async Task<HttpResponseMessage> GetBusinesses(YelpRequest req)
        {
            //object test = Request.Content;
            return await _yelpService.GetBusinesses(req);
            //return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [HttpPost, Route("wait")]
        public HttpResponseMessage Get(String businessUrl)
        {
            var test = _yelpService.ScrapeYelp(businessUrl.Value);
            return Request.CreateResponse(HttpStatusCode.OK, test);
        }
        
    }
}
