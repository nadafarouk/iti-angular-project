import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlistCount:number = 0;
  wishlistArr:any[]=[];
  private wishlistSubject = new BehaviorSubject(this.wishlistCount);
    wishlistState = this.wishlistSubject.asObservable();

  private unwishSubject = new BehaviorSubject("Add to wishlist");
    unwishState = this.unwishSubject.asObservable();


  constructor() {
    if(localStorage.getItem('wishlist')!=null){
      var storedWish = localStorage.getItem('wishlist');
      this.wishlistArr = JSON.parse(storedWish);
      this.wishlistCount = this.wishlistArr.length;
    }
  }
  getWishlistCount(){
    this.wishlistSubject.next(this.wishlistCount);
  }
  incrementWishlistCount(){
    this.wishlistCount+=1;
  }
  checkWishlist(id){
    if(this.wishlistCount==0)
    {
      this.addNewProduct(id);
      this.incrementWishlistCount();
      }else{
    var temp = this.wishlistArr.find(x=>x.id == id);
    if (temp) {
       return true;
      }else{
        return false;
        }
    }
  }
  addNewProduct(id){
    var product={
      "id": parseInt(id)
    };
      this.wishlistArr.push(product);
      this.updateLocalStorage();
    }
    updateLocalStorage(){
      localStorage.setItem('wishlist',JSON.stringify(this.wishlistArr));
    }

  unwish(id){
      var storedWish = localStorage.getItem('wishlist');
      this.wishlistArr = JSON.parse(storedWish);
      var temp = this.wishlistArr.find(x=>x.id == id);
      var index = this.wishlistArr.indexOf(temp);
      this.wishlistArr.splice(index,1);
      this.wishlistCount = this.wishlistArr.length;
      this.updateLocalStorage();
  }

}


