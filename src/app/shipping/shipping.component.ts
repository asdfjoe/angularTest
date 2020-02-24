import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { NibrsOffenseCount } from '../data-structs/nibrs-offense-count';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  nibrsData;
  nibrsOffenseCounts: NibrsOffenseCount[];
  curOri = 'WV0060200';

  constructor( private cartService: CartService) {      
  }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
    this.nibrsData = this.cartService.getNibrsDataTest().subscribe(data => {
      this.nibrsOffenseCounts = data.data;
      //console.log('Nibrs Data: ' + this.nibrsOffenseCounts);
    });    
  }

}