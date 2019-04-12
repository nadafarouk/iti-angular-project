import { Component, OnInit, ViewChild } from '@angular/core';
import { InputFieldComponent } from '../input-field/input-field.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
  email=["Email Address","email","Your Email"];
  password=["Password","password","Your Password","Re-Enter your password"];
  @ViewChild('emailInput') emailInput: InputFieldComponent ;
  @ViewChild('passwordInput') passwordInput: InputFieldComponent ;

  constructor() { }

  ngOnInit() {
  }
  loginupSubmit($event){
    this.validateLogin()

  }
  validateLogin(){
    if(this.passwordInput.input.valid && this.emailInput.input.valid)
    {
      var users=JSON.parse(localStorage.getItem('users'));
      users.forEach(user => {
        if(user.email == this.emailInput.input.value && user.password== this.passwordInput.input.value){
            sessionStorage.setItem("userLogged", JSON.stringify({
              "name": user.name,
              "email":user.email
            }));
          }
      });
    }else{
        console.log("fields not valid");

    }
  }
}
