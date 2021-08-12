
export interface IHotel {
  name: string,
  city: string,
  rate: number,
  fare: number,
  amenities: [],
  numberOfAdults:number
}

export interface IHotelList {
  hotels: IHotel[],
}
