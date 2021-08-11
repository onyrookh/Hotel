import { Injectable } from '@angular/core';
import { ServiceHelper } from './helper';
import {  IHotelList } from '../vms/hotelvm';

@Injectable({ providedIn: 'root' })
export class HotelService {
  private _GetAvailableHotelsUrl: string;

  constructor(private serviceHelper: ServiceHelper) {

    this._GetAvailableHotelsUrl = '/HotelsApi/GetHotels';

  }


  getAvailableHotel(city: string, numAdults: number, dateRangeValue: Date) {
    debugger;
    return this.serviceHelper.PostRequest<IHotelList>({ City: city, NumAdults: numAdults, DateRangeValue: dateRangeValue }, this._GetAvailableHotelsUrl);
  }


}
