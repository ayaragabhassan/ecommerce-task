import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input() Product: { Name: string; Image: string; Price: number; Description: string; };
}
