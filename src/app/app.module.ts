import { GuardService } from './material/services/guard.service';
import { CartModule } from './cart/cart.module';
import { MaterialModule } from './material/material.module';
import { SearchModule } from './search/search.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './form/details/details.component';
import { AddressComponent } from './form/address/address.component';
import { DeactivateService } from './material/services/deactivate.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  {
    path: 'form',
    component: FormComponent,
    canActivate: [GuardService],
    canDeactivate: [DeactivateService],
    data: {
      user: {name: 'Dan'}
    },
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: DetailsComponent },
      { path: 'address', component: AddressComponent }
    ]
  },
  { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
  { path: '**', component: NotFoundComponent},
  {path: '', component: NotFoundComponent, outlet: 'myoutlet' },
  {path: 'popup', component: PopupComponent, outlet: 'myoutlet' }

];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    FormComponent,
    DetailsComponent,
    AddressComponent,
    NotFoundComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    SearchModule,
    BrowserAnimationsModule,
    ProductsModule,
    CartModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GuardService, DeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
