import { Component, OnInit ,Renderer2 } from '@angular/core';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  cartCount:number;
  wishlistCount:number;
  navProducts:any[]=[];
  loggedInUser:any=0;
  status:boolean=false;
  constructor(private cart:CartService , private wishlist:WishlistService ,private renderer: Renderer2 ,private route:Router) {
    this.navProducts=this.cart.fillSelectedProduts();
  }

  ngOnInit() {
    this.cart.cartState.subscribe(cartCount=>this.cartCount =cartCount);
    this.wishlist.wishlistState.subscribe(wishlistCount=>this.wishlistCount=wishlistCount);
    this.cart.getCartCount();
    this.wishlist.getWishlistCount();
    this.loggedInUser = JSON.parse(sessionStorage.getItem('userLogged'));
    if(this.loggedInUser){
      this.status=true;
    }

  }
  removeProduct($event){
    this.cart.removeProduct($event["path"][0]["id"]);
    var selectedNode = this.renderer.selectRootElement($event["path"]);
    this.renderer.removeChild(selectedNode[5],selectedNode[4]);
  }
  logoutUser($event){
    sessionStorage.clear();
    this.route.navigate(['/login']);

  }

}
