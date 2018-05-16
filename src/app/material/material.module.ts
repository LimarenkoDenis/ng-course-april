import { DOMAIN, DOMAIN_TOKEN } from './../myconfig';
import { ProductsService } from './services/products.service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatInputModule, MatListModule } from '@angular/material';
import { HighlightDirective } from './directives/highlight.directive';
import { AccessDirective } from './directives/access.directive';
import { SearchPipePipe } from './pipe/search-pipe.pipe';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule
  ],
  declarations: [
    HighlightDirective,
    AccessDirective,
    SearchPipePipe
  ],
  exports: [
    HighlightDirective,
    AccessDirective,
    SearchPipePipe,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule
  ],
  providers: [
    ProductsService,
    { provide: DOMAIN_TOKEN, useValue: DOMAIN }
  ]
})
export class MaterialModule { }
