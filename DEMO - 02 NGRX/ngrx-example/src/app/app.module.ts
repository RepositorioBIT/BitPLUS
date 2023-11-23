import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { productsReducer } from './store/products/products.reducers';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsListComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      productsCartList: productsReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
