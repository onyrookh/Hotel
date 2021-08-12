import { Component, OnInit } from '@angular/core';
import { HotelService } from '../service/hotelservice';
import { IHotel } from '../vms/hotelvm';
import { FilterVM } from '../vms/filtervm';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './hotels-data.component.html'
})
export class AvailableHotelLazyDemo implements OnInit {

  hotels: any = [];
  filter: FilterVM;
  fromValue: Date[];
  numAdults: number;
  city:string
  first = 0;

  constructor(private hotelservice: HotelService) {
    this.filter = {
      city: "",
      dateRangeValue:"",
      numAdults:0
    }
  }

  ngOnInit() {
    this.loadHotel();
  }
  onSearch() {
    debugger;
    this.filter.city = this.city ? this.city:"";
    this.filter.numAdults = this.numAdults;
    if (this.fromValue && this.fromValue[0]) {
      this.filter.dateRangeValue = this.fromValue[0].toLocaleDateString().toString();
    }
    if (this.fromValue && this.fromValue[1]) {
      this.filter.dateRangeValue += "_" + this.fromValue[1].toLocaleDateString().toString();
    }
    this.loadHotel();
  }

  loadHotel() {
   

    this.hotelservice.getAvailableHotel(this.filter).then(data => {
      if (data) {
        this.hotels = data["hotels"].map(item => item);
      }
    });
      }

}
