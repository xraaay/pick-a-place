using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PickAnAPI.Models.Responses
{
    public class Business
    {
        public int Rating { get; set; }
        public string Price { get; set; }
        public string Name { get; set; }
        public int Review_Count { get; set; }
        public string Image_Url { get; set; }
        public Location Location { get; set; }
    }
}