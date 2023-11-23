import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = []

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.pipe(select('productsCartList')).subscribe((products: Product[]) => {
      this.products = products
    })
  }
}
