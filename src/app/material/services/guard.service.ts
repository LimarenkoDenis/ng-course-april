import { ProductsService } from './products.service.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  public constructor(private _userService: ProductsService) {}
  public canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    return this._userService.getUser();
    // return true;

    // return of(true);
    // this.sefrive.
    // return true;
    // return
  }
}
