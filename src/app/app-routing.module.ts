import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'signup',        component: SignupFormComponent },
  { path: 'products', component: HomePageComponent },
  { path: 'cart', component: ViewCartComponent },
  { path: 'products/:product', component: ViewProductDetailsComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



