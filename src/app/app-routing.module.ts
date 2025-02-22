import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Products/products/products.component';
import { AddProductComponent } from './Products/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'Products/add-product', component: AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
