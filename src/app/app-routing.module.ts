import { LoginComponent } from './auth/login/login.component';
import { ProductDetailsComponent } from './core/products/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './core/products/add-product/add-product.component';
import { ProductListingComponent } from './core/products/product-listing/product-listing.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuardService } from './_service/auth-guard.service';

const routes: Routes = [
  {path:"" , component: ProductListingComponent},
  {path:"home", redirectTo:"" , pathMatch: "full"},
  {path:"add-product" , component: AddProductComponent, canActivate: [AuthGuardService]},
  {path:"login" , component: LoginComponent},
  {path:"register" , component: RegisterComponent},
  {path:"product/details/:id" , component: ProductDetailsComponent},
  {path:"product/edit/:id" , component: AddProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
