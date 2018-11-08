using Help.Models;
using Help.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Help.Controllers
{
    [RoutePrefix("api/settings")]
    public class SettingsController : ApiController
    {
        SettingsService _settingsService;
        public SettingsController(SettingsService settingsService)
        {
            _settingsService = settingsService;
        }

        [HttpGet, Route]
        public HttpResponseMessage GetSettings(string name)
        {
            List<Settings> settings = _settingsService.GetSettings();
            return Request.CreateResponse(HttpStatusCode.OK, settings);
        }
    }
}
