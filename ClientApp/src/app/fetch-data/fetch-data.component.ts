import { Component, OnInit } from '@angular/core';
import { HotelService } from '../service/hotelservice';
import { LazyLoadEvent } from 'primeng/api';
import { IHotel } from '../vms/hotelvm';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class AvailableHotelLazyDemo implements OnInit {

  hotels: IHotel[];

  totalRecords: number;

  cols: any[];

  loading: boolean;


  constructor(private hotelservice: HotelService) { }

  ngOnInit() {
    this.loading = true;
    debugger;
    this.hotelservice.getAvailableHotel(JSON.stringify(event)).then(data =>
      this.hotels = [{
        "name": "Galaxy Earrings",
        "city": "Product Description",
        amenities:null,
        AvailableFrom:new Date(),
        AvailableTo:new Date(),
        fare:0,
        rate:3,
        totalRecords:0
      }]


    );

  }

}
