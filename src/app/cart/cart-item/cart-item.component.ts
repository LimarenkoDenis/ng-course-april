import { ProductsService } from './../../material/services/products.service.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  public cartItem$: Observable<Product>;
  public cartItem: Product;

  public constructor(
    private _activateRoute: ActivatedRoute,
    private _productService: ProductsService
  ) {}

  public ngOnInit(): void {
    // this._activateRoute.params.pipe(
    //   switchMap((data: {id: string}) => this._productService.getCartItem(data.id))
    // );

    const id: string  = this._activateRoute.snapshot.params['id'];
    this.cartItem$ = this._productService.getCartItem(id);

    this._productService.getCartItem(id).subscribe((data: Product) => {
      this.cartItem = data;
    });
  }

}
