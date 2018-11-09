using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PickAnAPI.Models
{
    public class Settings
    {
        public string Location { get; set; }
        public int Radius { get; set; }
        public int Price { get; set; }
        public bool OpenNow { get; set; }
    }
}