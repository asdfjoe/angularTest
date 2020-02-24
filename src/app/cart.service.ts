import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NibrsOffenseCount } from './data-structs/nibrs-offense-count';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  getNibrsDataTest() {
    return this.http.get<NibrsOffenseCount>('https://api.usa.gov/crime/fbi/sapi/api/nibrs/robbery/offense/agencies/WV0060200/count?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv');
  }

}