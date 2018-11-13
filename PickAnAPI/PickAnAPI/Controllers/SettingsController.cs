using PickAnAPI.Models;
using PickAnAPI.Models.Requests;
using PickAnAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PickAnAPI.Controllers
{
    [RoutePrefix("api/settings")]
    public class SettingsController : ApiController
    {
        SettingsService _settingsService;
        public SettingsController()
        {
            _settingsService = new SettingsService();
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
            int id = _settingsService.Create(req);
            return Request.CreateResponse(HttpStatusCode.OK, id);
        }
    }
}
