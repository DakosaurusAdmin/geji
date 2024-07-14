

using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace RapidApiService.Interfaces
{
    public interface IRapidApiService
    {
        Task<JObject> GetEndpointDataAsync(string endpointUrl);
        Task<JObject> GetProductSearchEndpointDataAsync(string query);
    }
}
