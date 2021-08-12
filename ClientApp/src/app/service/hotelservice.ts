import { Injectable } from '@angular/core';
import { ServiceHelper } from './helper';
import {  IHotelList } from '../vms/hotelvm';
import { FilterVM } from '../vms/filtervm';

@Injectable({ providedIn: 'root' })
export class HotelService {
  private _GetAvailableHotelsUrl: string;

  constructor(private serviceHelper: ServiceHelper) {

    this._GetAvailableHotelsUrl = '/HotelsApi/GetHotels';

  }


  getAvailableHotel(filter: FilterVM) {
    debugger;
    return this.serviceHelper.GetRequest<IHotelList>(this._GetAvailableHotelsUrl + "?city="+filter.city + "&numAdults=" + filter.numAdults + "&dateRangeValue=" + filter.dateRangeValue);
  }


}
