import { Component, OnInit ,Renderer2 } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.sass']
})
export class ViewCartComponent implements OnInit {
  totalMoney:number=0;
  allProducts : any []=[];
  cartProducts : any[]=[];
  selectedProducts: any[]=[];

  constructor(private renderer: Renderer2,private cart:CartService)
  {

  }
  ngOnInit() {

    this.selectedProducts=this.cart.fillSelectedProduts();


  }

  removeChild($event){
    var selectedNode = this.renderer.selectRootElement($event["path"]);
    this.renderer.removeChild(selectedNode[5],selectedNode[4]);
  }




}
