using Hotel.VMs;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Hotel.Controllers.api
{

    [Produces("application/json")]
    public class HotelsApiController : ControllerBase
    {


        [HttpPost]
        public HotelsVM GetHotels([FromBody] JObject criteria)
        {
            string city = null;
            //if (Filter !=null && Filter.Count >0)
            //{
            //     city = Filter["City"].ToObject<string>();

            //}

            string oHotelListJson = System.IO.File.ReadAllText("Data/HotelsList.json");

            HotelsVM oHotelList = JsonConvert.DeserializeObject<HotelsVM>(oHotelListJson);

            if (oHotelList != null && oHotelList.Hotels.Any())
            {
                oHotelList.Hotels = oHotelList.Hotels.OrderByDescending(s => s.Rate).ToList();
            }
            return oHotelList;
        }


    }
}
