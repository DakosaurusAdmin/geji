using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using RapidApiService.Interfaces;

namespace RapidApiService.Services
{

    /// <summary>  
    /// Rapid api service class.
    /// For usage, look at the Program.cs file in the geji-rapi-api-service-test project.
    /// </summary>
    public class RapidApiService: IRapidApiService
    {
        private readonly HttpClient _httpClient;
        
        public RapidApiService(string rapidApiHost, string rapidApiKey)
        {
            _httpClient = new HttpClient();
            _httpClient.DefaultRequestHeaders.Add("x-rapidapi-key", rapidApiKey); 
            _httpClient.DefaultRequestHeaders.Add("x-rapidapi-host", rapidApiHost); 
        }

        public async Task<JObject> GetEndpointDataAsync(string endpointUrl)
        {
            var response = await _httpClient.GetAsync(endpointUrl);
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            return JObject.Parse(content);
        }

        public async Task<JObject> GetProductSearchEndpointDataAsync(string query)
        {
            string queryEndpoint = string.Format($"https://real-time-amazon-data.p.rapidapi.com/search?query={query}");
            var response = await _httpClient.GetAsync(queryEndpoint);
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            return JObject.Parse(content);
        }

        //TODO: Add more methods for other endpoints from here
        //https://rapidapi.com/letscrape-6bRBa3QguO5/api/real-time-amazon-data/playground/apiendpoint_e8779502-64aa-4a06-ad7e-84a1ad1bcd67
        
    }
}
