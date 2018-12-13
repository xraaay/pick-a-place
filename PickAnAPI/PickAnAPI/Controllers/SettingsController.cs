using PickAnAPI.Models;
using PickAnAPI.Models.Requests;
using PickAnAPI.Models.Requests.Settings;
using PickAnAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace PickAnAPI.Controllers
{
    [RoutePrefix("api/settings")]
    public class SettingsController : ApiController
    {
        SettingsService _settingsService;
        YelpService _yelpService;

        public SettingsController()
        {
            _settingsService = new SettingsService();
            _yelpService = new YelpService();
        }

        [HttpGet]
        public HttpResponseMessage GetSettings()
        {
            List<Settings> settings = _settingsService.GetSettings();
            return Request.CreateResponse(HttpStatusCode.OK, settings);
        }

        [HttpPost]
        public HttpResponseMessage Post(SettingsCreate req)
        {
            if(req == null)
            {
                ModelState.AddModelError("Null", "Model cannot be null");
            }
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            int id = _settingsService.Create(req);
            return Request.CreateResponse(HttpStatusCode.OK, id);
        }

        [HttpPut, Route("{id:int}")]
        public HttpResponseMessage UpdateSettings(SettingsUpdate req,int id)
        {
            if (!ModelState.IsValid)
            {
                ModelState.AddModelError("Error", "Model Error");
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            if(req.Id != id)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, "Ids do not match");
            }
            _settingsService.Update(req);
            return Request.CreateResponse(HttpStatusCode.OK, id);
        }

        [HttpGet, Route("search/{id:int}")]
        public async Task<HttpResponseMessage> GetBusinesses(int id)
        {
            YelpRequest settings = _settingsService.SearchById(id);
            if(settings.CurrentLocation == false)
            {
                return await _yelpService.GetBusinesses(settings);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, "Current Location Required");
            }
        }

        [HttpDelete, Route("{id:int}")]
        public HttpResponseMessage Delete(int id)
        {
            _settingsService.Delete(id);
            return Request.CreateResponse(HttpStatusCode.OK, "Success");
        }

        [HttpGet, Route("{id:int}")]
        public HttpResponseMessage GetById(int id)
        {
            Settings setting = _settingsService.GetById(id);
            return Request.CreateResponse(HttpStatusCode.OK, setting);
        }
    }
}
