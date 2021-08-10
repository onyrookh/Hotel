import { Injectable } from '@angular/core';
import { ServiceHelper } from './helper';
import {  IHotelList } from '../vms/hotelvm';

@Injectable({ providedIn: 'root' })
export class HotelService {
  private _GetAvailableHotelsUrl: string;

  constructor(private serviceHelper: ServiceHelper) {

    this._GetAvailableHotelsUrl = '/HotelsApi/GetHotels';

  }


  getAvailableHotel(filter:string) {
    return this.serviceHelper.PostRequest<IHotelList>({ filter: filter }, this._GetAvailableHotelsUrl);
  }


}
