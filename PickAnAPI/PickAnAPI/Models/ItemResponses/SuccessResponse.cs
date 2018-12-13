using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PickAnAPI.Models.ItemResponses
{
    public class SuccessResponse : BaseResponse
    {
        public SuccessResponse()
        {
            this.IsSuccessful = true;
        }
    }
}