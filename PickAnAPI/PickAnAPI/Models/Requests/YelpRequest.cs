using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PickAnAPI.Models.Requests
{
    public class YelpRequest
    {
        public double? Longitude { get; set; }
        public double? Latitude { get; set; }
        public string Location { get; set; }
        public int Radius { get; set; }
        public string Price { get; set; }
        public bool OpenNow { get; set; }
        public string Term { get; set; }
        public int Limit { get; set; }
        public bool CurrentLocation { get; set; }
    }
}