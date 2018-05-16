import { ProductsService } from './../../material/services/products.service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart: Product[] = [];

  public constructor(
    private _cartService: ProductsService
  ) { }

  public ngOnInit(): void {
    this.cart = this._cartService.getCart();
  }

  public deleteFromCart(id: string): void {
    this._cartService.deleteFromCart(id);
  }

}
