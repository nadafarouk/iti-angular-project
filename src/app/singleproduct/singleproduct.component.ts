import { Component, OnInit ,Input , EventEmitter, Output} from '@angular/core';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.sass']
})
export class SingleproductComponent implements OnInit {
  public addVar : string ="add to wishlist";
  public removeVar : string ="remove from wishlist";
  public title :string = this.addVar;
  @Output() cartSubmitted = new EventEmitter<boolean>();
  @Output() wishlistSubmitted = new EventEmitter<boolean>();
  @Input() public ID : number;
  @Input() public imageSource : string;
  @Input() public productCompany : string;
  @Input() public productTitle : string;
  @Input() public productPrice : number ;
  @Input() public productDescription : string;

  constructor(private cart:CartService , private wishlist: WishlistService){

  }

  ngOnInit() {
    if(this.wishlist.checkWishlist(this.ID))
    {
      this.title =this.removeVar;
    }else{
      this.title= this.addVar;
    }
  }
  cartSubmit($event){
    this.cart.addToCart($event["path"][0]["id"]);
    this.cart.getCartCount();
    this.cart.getMoneyTotal();
  }
  wishlistSubmit($event){
    var id=$event["path"][0]["id"];
    var status =this.wishlist.checkWishlist(id);
    if(status)
    {
      this.wishlist.unwish(id);
      this.title = this.addVar;
    }else{
      this.wishlist.incrementWishlistCount();
      this.wishlist.addNewProduct(id);
      this.title= this.removeVar;
    }

    this.wishlist.getWishlistCount();

  }

}
