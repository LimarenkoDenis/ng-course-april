import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {path: 'cart', component: CartComponent},
      {path: 'cart/:id', component: CartItemComponent}
    ])
  ],
  declarations: [CartComponent, CartItemComponent],
  exports: [CartComponent]
})
export class CartModule { }
