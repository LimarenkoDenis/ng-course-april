import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input()
  public products: any;

  @Input()
  public activeItem: number;

  @Output()
  public onSetActiveItem: EventEmitter<any> = new EventEmitter();

  @Output()
  public onEdit: EventEmitter<string> = new EventEmitter();

  public setActiveItem(index: number): void {
    this.onSetActiveItem.emit(index);
  }

  public edit(value: string): void {
    this.onEdit.emit(value);
  }
}
