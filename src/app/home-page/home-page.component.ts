import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/products.json';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  products : any;
  constructor() {
    this.products = data['default'];
  }

  ngOnInit() {

  }
  getData(){
    return this.products;
  }

}
