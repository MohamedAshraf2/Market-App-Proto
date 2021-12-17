import { MyInterseptorService } from './_service/my-interseptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductListingComponent } from './core/products/product-listing/product-listing.component';
import { FilterListComponent } from './core/products/filter-list/filter-list.component';
import { ProductItemComponent } from './core/products/product-item/product-item.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { AddProductComponent } from './core/products/add-product/add-product.component';
import { ProductDetailsComponent } from './core/products/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListingComponent,
    ProductItemComponent,
    FilterListComponent,
    DropdownComponent,
    AddProductComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: MyInterseptorService , multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
