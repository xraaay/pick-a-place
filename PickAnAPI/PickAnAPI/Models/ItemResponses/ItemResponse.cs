using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PickAnAPI.Models.ItemResponses
{
    public class ItemResponse<T> : SuccessResponse
    {
        public T Item { get; set; }
    }
}