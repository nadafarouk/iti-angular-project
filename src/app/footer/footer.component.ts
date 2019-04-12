import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  totalMoney:number=0;
  constructor(private cart:CartService){
    this.cart.moneyState.subscribe(money=>this.totalMoney = money);
    this.cart.getMoneyTotal();
  }

  ngOnInit() {
  }

}
