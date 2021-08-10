import { Component, OnInit } from '@angular/core';
import { HotelService } from '../service/hotelservice';
import { IHotel, Hotel } from '../vms/hotelvm';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './hotels-data.component.html'
})
export class AvailableHotelLazyDemo implements OnInit {

  hotels: any = [];

  constructor(private hotelservice: HotelService) { }

  ngOnInit() {
    this.hotelservice.getAvailableHotel(JSON.stringify(event)).then(data => {
      if (data) {
        this.hotels = data["hotels"].map(item => item);

      }
    }
    );
  }

}
