import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'app';
  public logo: string = 'https://angular.io/assets/images/logos/angular/angular.png'

  public setTitle(title: string): void {
    this.title  = title;
  }
}
