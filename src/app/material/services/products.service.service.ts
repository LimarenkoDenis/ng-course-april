import { DOMAIN_TOKEN } from './../../myconfig';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

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
  public getProducts(queryParams?: {_limit: string, _page: string}): Observable<Product[]> {
    console.log(queryParams)
    const params: HttpParams = new HttpParams({fromObject: queryParams});
    return this._http.get<Product[]>(`${this._url}/products`, {params});
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

  public getUser(): Observable<boolean> {
    return of(true);
    // return this._http.get('');
  }

  public getCartItem(id: string): Observable<Product> {
    return this._http.get<Product>(`${this._url}/products/${id}`);
  }
}
