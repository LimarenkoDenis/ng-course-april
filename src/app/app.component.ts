import { Observable } from 'rxjs';
import { ProductsService } from './material/services/products.service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string;
  public logo: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  public placeholderText: string = '';
  public activeItem: number = 0;
  public date: Date = new Date();
  public products$: Observable<Product[]>;

  public constructor(
    private _productService: ProductsService
  ) {}

  public ngOnInit(): void {
    // this.products = this._productService.getProducts()
    // this._productService.getProducts().subscribe((products: Product[]) => this.products = products);
    this.products$ = this._productService.getProducts();
  }

  public setTitle(title: string): void {
    this.title = title;
    this.placeholderText = title;
  }

  // public edit(title: string): void {
  //   const product: any = this.products[this.activeItem];
  //   this.products.splice(this.activeItem, 1, {...product, title});
  // }

  public setActiveItem(index: number): void {
    this.activeItem = index;
  }

  public addToCart(product: Product): void {
    this._productService.addToCart(product);
  }

}
