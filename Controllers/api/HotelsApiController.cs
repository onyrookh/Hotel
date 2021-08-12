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


        [HttpGet]
        public HotelsVM GetHotels(string city,string dateRangeValue,int numAdults)
        {

            Nullable<DateTime> dateFrom = null;
            Nullable<DateTime> dateTo = null;

            if (!string.IsNullOrEmpty(dateRangeValue))
            {
                var dateFromTo = dateRangeValue.Split('_');
                if (!string.IsNullOrEmpty(dateFromTo[0]))
                {
                    dateFrom = Convert.ToDateTime(dateFromTo[0]);

                }
                if (dateFromTo.Length ==2 &&  !string.IsNullOrEmpty(dateFromTo[1]))
                {
                    dateTo = Convert.ToDateTime(dateFromTo[1]);

                }
                else
                {
                    dateTo = Convert.ToDateTime(dateFromTo[0]);

                }


            }



            string oHotelListJson = System.IO.File.ReadAllText("Data/HotelsList.json");

            HotelsVM oHotelList = JsonConvert.DeserializeObject<HotelsVM>(oHotelListJson);

            if (oHotelList != null && oHotelList.Hotels.Any())
            {
                oHotelList.Hotels = oHotelList.Hotels.Where(s=>
                (!string.IsNullOrEmpty(city)? s.City.Trim().ToLower().Contains(city.ToLower().Trim()):true) &&
                (numAdults >0 ? s.NumberOfAdults==numAdults : true)&&
                (dateFrom !=null && dateTo !=null ?s.FromDate >=dateFrom && s.ToDate <=dateTo:true)
                ).OrderByDescending(s => s.Rate).ToList();
            }
            return oHotelList;
        }


    }
}
