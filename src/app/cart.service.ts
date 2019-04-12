import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as data from '../assets/products.json';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartCount:number = 0;
  moneyTotal:number=0;
  cartArr:any[]=[];
  allProducts:any[]=[];
  selectedItems:any[]=[];
  private cartSubject = new BehaviorSubject(this.cartCount);
  cartState = this.cartSubject.asObservable();

  private moneySubject = new BehaviorSubject(this.moneyTotal);
  moneyState = this.moneySubject.asObservable();

  constructor() {
    if(localStorage.getItem('cart')!=null){
      var storedCart = localStorage.getItem('cart');
      this.cartArr = JSON.parse(storedCart);
      this.cartArr.forEach(element => {
        this.cartCount+=element.count;
      });
    }
    this.allProducts=data['default'];
  }
  getCartCount(){
    this.cartSubject.next(this.cartCount);
  }
  incrementCartCount(){
    this.cartCount+=1;
  }
  decrementCartCount(){
    this.cartCount-=1;
  }
  addToCart(id){
    if(this.cartCount==0)
    {
      this.addNewProduct(id);
      this.incrementCartCount();
      }else{
    var temp = this.cartArr.find(x=>x.id == id);
    if (temp) {
          this.incrementCartCount();
          temp.count++;
          this.cartArr.find(x=>x.id == id).count=temp.count;
          this.updateLocalStorage();
      }else{
          this.incrementCartCount();
          this.addNewProduct(id);
        }
    }
  }
  addNewProduct(id){
    var product={
      "id": parseInt(id),
      "count":1
    };
      this.cartArr.push(product);
      this.updateLocalStorage();
    }
  decrementProductCount(id){
    this.readLocalStorage();
    var temp = this.cartArr.find(x=>x.id == id);
    var index = this.cartArr.indexOf(temp);
    this.cartArr[index].count-=1;
    this.decrementCartCount();
    this.updateLocalStorage();
  }
  removeProduct(id){
    this.readLocalStorage();
    var temp = this.cartArr.find(x=>x.id == id);
    var index = this.cartArr.indexOf(temp);
    this.cartArr.splice(index,1);
    this.decrementCartCount();
    this.updateLocalStorage();
  }

  fillSelectedProduts(){
    this.selectedItems=[];
    this.readLocalStorage();
    this.cartArr.forEach(cartElement => {
      this.allProducts.forEach(element => {
          if(element.index==cartElement.id){
            element.count = cartElement.count;
            this.selectedItems.push(element);
          }
      });
    });
    return this.selectedItems;
  }

  calculateTotalMoney(){
    this.fillSelectedProduts();
    this.moneyTotal=0;
    this.selectedItems.forEach(element => {
      var money=element.count*element.price;
      this.moneyTotal+=money;
    });
  }

  getMoneyTotal(){
    this.calculateTotalMoney();
    this.moneySubject.next(this.moneyTotal);
  }
    updateLocalStorage(){
      localStorage.setItem('cart',JSON.stringify(this.cartArr));
    }
    readLocalStorage(){
      var storedCart = localStorage.getItem('cart');
      this.cartArr = JSON.parse(storedCart);
    }


}
