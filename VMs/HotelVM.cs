using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel.VMs
{
    public class HotelVM
    {
        public string Name { get; set; }
        public string City { get; set; }
        public string[] Amenities { get; set; }
        public int Fare { get; set; }
        public int Rate { get; set; }
    }

    public class HotelsVM
    {
        public List<HotelVM> Hotels { get; set; } 
    
    }
        
}
