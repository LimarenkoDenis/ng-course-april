import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'app';
  public logo: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  public placeholderText: string = '';
  public activeItem: number = 0;
  public date: Date = new Date();
  public products: any[] = [
    {
      "id": 0,
      "title": "Cola",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 12,
      "type": "drink"
    },
    {
      "id": 1,
      "title": "Pepsi",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 10,
      "type": "drink"
    },
    {
      "id": 2,
      "title": "Pepsi cola",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 11,
      "type": "drink"
    },
    {
      "id": 3,
      "title": "Big Mac",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 22,
      "type": "sandwich"
    },
    {
      "id": 4,
      "title": "Big Tasty",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 45,
      "type": "sandwich"
    },
    {
      "id": 5,
      "title": "pie",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 10,
      "type": "dessert"
    },
    {
      "id": 6,
      "title": "chocolate",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 22,
      "type": "dessert"
    },
    {
      "id": 7,
      "title": "ice cream",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
      "price": 45,
      "type": "dessert"
    },
    {
      "id": 8,
      "title": "Orange juice small",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.JuiceOrangeSmall.png",
      "price": 45,
      "type": "drink"
    },
    {
      "id": 9,
      "title": "Coffee 'Late' small",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae culpa porro ducimus!",
      "photo": "https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/hero.CoffeeLatteSmall.png",
      "price": 45,
      "type": "drink"
    },
    {
      "title": "Smth",
      "description": "2222",
      "photo": "222",
      "price": "2222",
      "type": "dessert",
      "id": 10
    },
    {
      "title": "sdgsg",
      "description": "fgdfgfdgdfg",
      "photo": "dfgdfgdf",
      "price": "dfgdfgdfg",
      "type": "dessert",
      "id": 12
    }
  ];

  public setTitle(title: string): void {
    this.title = title;
    this.placeholderText = title;
  }

  public edit(title: string): void {
    const product: any = this.products[this.activeItem];
    this.products.splice(this.activeItem, 1, {...product, title});
  }

  public setActiveItem(index: number): void {
    this.activeItem = index;
  }

}
