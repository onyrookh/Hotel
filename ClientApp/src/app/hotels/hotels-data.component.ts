import { Component, OnInit } from '@angular/core';
import { HotelService } from '../service/hotelservice';
import { IHotel } from '../vms/hotelvm';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './hotels-data.component.html'
})
export class AvailableHotelLazyDemo implements OnInit {

  hotels: any = [];
  dateRangeValue: Date;
  numAdults: number;
  city:string
  first = 0;

  constructor(private hotelservice: HotelService) { }

  ngOnInit() {
    this.loadHotel();
  }
  onSearch() {
    this.loadHotel();
  }

  loadHotel() {
    this.hotelservice.getAvailableHotel(this.city, this.numAdults, this.dateRangeValue).then(data => {
      if (data) {
        this.hotels = data["hotels"].map(item => item);
      }
    });
      }

}
