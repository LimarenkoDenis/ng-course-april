import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [CartComponent],
  exports: [CartComponent]
})
export class CartModule { }
