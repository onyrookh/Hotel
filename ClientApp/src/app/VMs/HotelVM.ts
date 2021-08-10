
export interface IHotel {
  name: string,
  city: string,
  AvailableFrom: Date,
  AvailableTo: Date,
  rate: number,
  totalRecords: number,
  fare: number,
  amenities :[]
}

export class Hotel {
  name: string;
  city: string;
  AvailableFrom: Date;
  AvailableTo: Date;
  rate: number;
  totalRecords: number;
  fare: number;
  amenities: [];
}


export interface IHotelList {
  hotels: IHotel[],
}
