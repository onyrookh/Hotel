import { Injectable } from '@angular/core';
import { ServiceHelper } from './helper';
import { IHotel } from '../vms/hotelvm';

@Injectable({ providedIn: 'root' })
export class HotelService {
  private _GetReadingLevelsByVideoCategoryIDUrl: string;

  constructor(private serviceHelper: ServiceHelper) {

    this._GetReadingLevelsByVideoCategoryIDUrl = '/api/VideoCategoryApi/GetReadingLevels';

  }


  getAvailableHotel(filter:string) {
    return this.serviceHelper.PostRequest<IHotel[]>({ filter: filter }, this._GetReadingLevelsByVideoCategoryIDUrl);
  }


}
