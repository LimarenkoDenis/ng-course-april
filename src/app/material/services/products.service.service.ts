import { DOMAIN_TOKEN } from './../../myconfig';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public cart: Product[] = [];


  public constructor(
    private _http: HttpClient,
    @Inject(DOMAIN_TOKEN) private _url: string
  ) {

  }
  public getProducts(): Observable<Product[]> {
    // `${environment.api}/products`
    return this._http.get<Product[]>(`${this._url}/products`);
  }

  public getCart(): Product[] {
    return this.cart;
  }

  public addToCart(product: Product): void {
    const index: number = this.cart.findIndex((item: Product) => item.id === product.id);

    if (index === -1) {
      this.cart.push({...product, amount: 1});
      return;
    }

    this.cart[index].amount++;
  }

  public deleteFromCart(id: string): void {
    const index: number = this.cart.findIndex((item: Product) => item.id === id);
    this.cart.splice(index, 1);
  }
}
