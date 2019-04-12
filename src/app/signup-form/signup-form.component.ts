import { Component, OnInit , ViewChild } from '@angular/core';
import { InputFieldComponent } from '../input-field/input-field.component';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.sass']
})
export class SignupFormComponent implements OnInit {
    name=["Enter your name","text","Your Name"];
    email=["Email Address","email","Your Email"];
    password=["Password","password","Your Password","Re-Enter your password"];
    @ViewChild('nameInput') nameInput: InputFieldComponent ;
    @ViewChild('emailInput') emailInput: InputFieldComponent ;
    @ViewChild('passwordInput') passwordInput: InputFieldComponent ;
    @ViewChild('repasswordInput') repasswordInput: InputFieldComponent ;


  constructor() { }

  ngOnInit() {

  }
  signupSubmit($event){
    if(this.validateInput()){
      var user={
          "name":this.nameInput.input.value,
          "email": this.emailInput.input.value,
          "password":this.passwordInput.input.value
      }
     this.storeData(user);
    }
  }
  private validateInput() {

    if(this.nameInput.input.valid && this.emailInput.input.valid)
    {
      if(this.passwordInput.input.value == this.repasswordInput.input.value){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
  private storeData(user){
    var users:any[]=[];
    if(localStorage.getItem('users')){
      users =JSON.parse(localStorage.getItem('users'));

    }
      users.push(user);
      localStorage.setItem('users',JSON.stringify(users));


  }
}
