using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PickAnAPI.Models.Requests
{
    public class SettingsCreate
    {
        public string Name { get; set; }
        public string Location { get; set; }
        public int Radius { get; set; }
        public string Price { get; set; }
        public bool OpenNow { get; set; }
    }
}