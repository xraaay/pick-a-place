using PickAnAPI.Models.Requests;
using PickAnAPI.Models.Responses;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace PickAnAPI.Services
{
    public class YelpService
    {
        readonly string connectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;

        public async Task<object> GetBusinesses(QueryString url)
        {
            string yelpURI = "https://api.yelp.com/v3/businesses/search?";
            string fullURI = yelpURI + url.String;
            string apiKey = ConfigurationManager.AppSettings["yelpAPI"];

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(yelpURI);
            client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", apiKey);
            HttpResponseMessage response = await client.GetAsync(fullURI);

            return response;
        }
    }
}