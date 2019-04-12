import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule}    from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { FormSubmitButtonComponent } from './form-submit-button/form-submit-button.component';
import { HeaderComponent } from './header/header.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartService } from './cart.service';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { NavBarProductComponent } from './nav-bar-product/nav-bar-product.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    PageNotFoundComponent,
    InputFieldComponent,
    FormSubmitButtonComponent,
    HeaderComponent,
    SingleproductComponent,
    UserProfileComponent,
    HomePageComponent,
    ViewCartComponent,
    CartProductComponent,
    NavBarProductComponent,
    ViewProductDetailsComponent,
    FooterComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
