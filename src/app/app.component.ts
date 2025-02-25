import { Component, ViewEncapsulation } from '@angular/core';
import { products } from './data/ds';
import { Product } from './Interface/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  encapsulation:ViewEncapsulation.None

})
export class AppComponent {
  title = 'ecommerce-task';
  productsList = products;

  addProduct(product:Product){
    console.log('MyProduct' ,  product);
    this.productsList.push(product);
  }
}
