using PickAnAPI.Models.Requests;
using PickAnAPI.Models.Responses;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Threading.Tasks;
using System.Web;

namespace PickAnAPI.Services
{
    public class YelpService
    {
        readonly string connectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;

        public async Task<HttpResponseMessage> GetBusinesses(YelpRequest req)
        {
            string yelpURI = "https://api.yelp.com/v3/businesses/search?";
            //Type props = req.GetType();
            //string propName = nameof(req.Latitude)
            Type type = req.GetType();
            PropertyInfo[] props = type.GetProperties();
            foreach (PropertyInfo x in props)
            {
                if(x.GetValue(req) != null)
                {
                    string name = x.Name.ToLower();
                    string value = x.GetValue(req).ToString();
                    string add = name + "=" + value + "&";
                    yelpURI = yelpURI + add;
                }
                else
                {
                    continue;
                }
            }



            //string fullURI = yelpURI + url.String;
            string apiKey = ConfigurationManager.AppSettings["yelpAPI"];
            HttpClient client = new HttpClient();
            //client.BaseAddress = new Uri(yelpURI);
            client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", apiKey);
            HttpResponseMessage response = await client.GetAsync(yelpURI);
            return response;
        }
    }
}