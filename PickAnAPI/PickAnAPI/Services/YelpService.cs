using AngleSharp.Parser.Html;
using PickAnAPI.Models.Requests;
using PickAnAPI.Models.Responses;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
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
            if (req.Price.Length > 2)
            {
                req.Price = req.Price.Substring(1, req.Price.Length - 2);
            }
            req.Price = req.Price;
            
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


        public List<string> ScrapeYelp(string businessUrl)
        {
            List<string> results = new List<string>();
            WebClient webClient = new WebClient();
            webClient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36");
            var html = webClient.DownloadString(businessUrl +"?q=wait");
            var parser = new HtmlParser();
            var document = parser.Parse(html);
            var comments = document.QuerySelector(".feed .review-list");
            var reviews = comments.QuerySelectorAll(".review-wrapper").Skip(1);
            foreach(var row in reviews)
            {
                string comment = row.QuerySelector("p").TextContent;
                results.Add(comment);
            };

            List<string> waitList = new List<string>();
            foreach (var sentence in results)
            {
                string[] split = sentence.Split(new[] { ". " }, StringSplitOptions.RemoveEmptyEntries);
                var wait = split.Where(x => x.ToLower().Contains("wait"));
                waitList.AddRange(wait);
            }
            return waitList;
        }
    }
}