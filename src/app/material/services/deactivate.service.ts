import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeactivateService implements CanDeactivate<any> {

  constructor() { }

  public canDeactivate() {
   const allow: boolean = confirm('Do you want to leave this page?');
    return allow;
  }

}
