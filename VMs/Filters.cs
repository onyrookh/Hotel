using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel.VMs
{
    public class Filters
    {

        public int numAdults { get; set; }

        public string city { get; set; }
        public DateTime dateRangeValue { get; set; }
    }
}
