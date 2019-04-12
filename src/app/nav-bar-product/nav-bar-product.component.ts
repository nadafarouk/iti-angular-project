import { Component, OnInit ,Input , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar-product',
  templateUrl: './nav-bar-product.component.html',
  styleUrls: ['./nav-bar-product.component.sass']
})
export class NavBarProductComponent implements OnInit {

  @Input() productImage;
  @Input() ID;
  @Input() productName;
  @Output() removeProduct=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  removeClicked($event){
    this.removeProduct.emit($event);
  }
}
