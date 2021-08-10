using Hotel.VMs;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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
        public HotelsVM GetHotels([FromBody] string value)
        {
            string oHotelListJson = System.IO.File.ReadAllText("Data/HotelsList.json");

            HotelsVM oHotelList = JsonConvert.DeserializeObject<HotelsVM>(oHotelListJson);

            return oHotelList;
        }


    }
}
