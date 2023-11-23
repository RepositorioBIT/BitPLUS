import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products-service.service';
import { Product } from 'src/app/models/product.model';
import { Store } from '@ngrx/store'
import { addProduct } from 'src/app/store/products/products.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit  {

  products: Product[] = []

  constructor(
    private productService: ProductsService,
    private store: Store,
    ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
        // Manejo de errores, puedes mostrar un mensaje al usuario o realizar alguna otra acción
      }
    );
  }

  addProduct(newProduct:Product) {
    this.store.dispatch(addProduct({product: newProduct}))
  }
}
