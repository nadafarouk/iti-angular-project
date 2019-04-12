import { Component, OnInit , Output , EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-form-submit-button',
  templateUrl: './form-submit-button.component.html',
  styleUrls: ['./form-submit-button.component.sass']
})
export class FormSubmitButtonComponent implements OnInit {


  @Output() submitted = new EventEmitter<boolean>();
  @Input() public classType : string ;
  @Input() public id : number ;
  @Input() public name: string;
  @Input() public title: string;
  

//  buttonTitle

  constructor()
  {

  }

  ngOnInit() {
  }

  formSubmit(){
    this.submitted.emit(true);
  }
}
