using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PickAnAPI.Models.ItemResponses
{
    public abstract class BaseResponse
    {
        public string isSuccessful { get; set; }
    }
}