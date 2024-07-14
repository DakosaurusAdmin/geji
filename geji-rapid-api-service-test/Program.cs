using System;
using System.Threading.Tasks;
using RapidApiService.Services;

namespace RapidApiServiceTest
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var apiHost = "real-time-amazon-data.p.rapidapi.com"; 
            var apiKey = "70291374f2msh838354b882d33c5p143097jsnfaf33230915d"; 
            //TODO, move to cloud provider based app config service

            var rapidApiService = new RapidApiService.Services.RapidApiService(apiHost, apiKey);

            try
            {
                // Replace with your actual search term
                string query = "phone";

                var data = await rapidApiService.GetProductSearchEndpointDataAsync(query);
                Console.WriteLine(data.ToString());
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");
            }
        }
    }
}
