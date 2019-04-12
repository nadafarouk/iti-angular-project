import { Component, OnInit , Input, Output } from '@angular/core';
import { FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.sass']
})
export class InputFieldComponent implements OnInit {
  input = new FormControl('',[Validators.required,Validators.minLength(3)]);
  @Input() public inputLabel : string;
  @Input() public inputType : string;
  @Input() public inputPlace : string;


  constructor() {

  }

  ngOnInit() {
  }

}
