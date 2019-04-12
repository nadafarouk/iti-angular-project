import { Component, OnInit , Input ,Output ,EventEmitter} from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.sass']
})
export class CartProductComponent implements OnInit {
  @Input() public ID : number;
  @Input() public imageSource : string;
  @Input() public productCompany : string;
  @Input() public productTitle : string;
  @Input() public productPrice : number ;
  @Input() public productDescription : string;
  @Input() public productCount : number;
  @Input() public totalPrice : number;

  @Output() removeChild = new EventEmitter();

  constructor(private cart:CartService) { }

  ngOnInit() {
  }
  addOne($event){
    this.cart.addToCart($event["path"][0]["id"]);
    this.productCount++;
    this.cart.getCartCount();
    this.totalPrice = this.productCount * this.productPrice;
    this.cart.getMoneyTotal();
  }

  removeOne($event){

    if (this.productCount>1) {
      this.cart.decrementProductCount($event["path"][0]["id"]);
      this.productCount--;
      this.cart.getCartCount();
      this.cart.getMoneyTotal();

    }else if (this.productCount==1) {
      this.cart.removeProduct($event["path"][0]["id"]);
      this.productCount--;
      this.cart.getCartCount();
      this.cart.getMoneyTotal();
      this.removeChild.emit($event);
    } else{

    }



    this.totalPrice = this.productCount * this.productPrice;


  }

}
