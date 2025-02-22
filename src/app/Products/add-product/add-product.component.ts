import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../Interface/Product';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  productObject:Product = {
    Name: '',
    Image:'../../assets/Images/3.jpg',
    Price: 0,
    Description: ''
  };

  @Output() AddNewProduct = new EventEmitter<Product>();

  addProduct() {
    this.AddNewProduct.emit(this.productObject);
    this.productObject = <Product>{}
  }
}
