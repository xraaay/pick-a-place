using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PickAnAPI.Models.Requests.Settings
{
    public class SettingsUpdate
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Term { get; set; }
        [Required]
        public int Radius { get; set; }
        [Required]
        public string Price { get; set; }
        public bool OpenNow { get; set; }
        public string Location { get; set; }
    }
}