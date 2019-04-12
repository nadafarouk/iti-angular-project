import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from "@angular/router";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.sass']
})
export class ViewProductDetailsComponent implements OnInit {
  productId:number;
  currentProduct:any;
  constructor(private route: ActivatedRoute,private cart:CartService,private redirect:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId =parseInt(params.get("product"));
    });
    this.currentProduct=this.cart.allProducts.find(x=>x.index == this.productId);
    if(this.currentProduct){

    }else{
      this.redirect.navigate(['/products']);
    }

  }

}
