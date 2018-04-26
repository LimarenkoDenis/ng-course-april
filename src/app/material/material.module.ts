import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';
import { HighlightDirective } from './directives/highlight.directive';
import { AccessDirective } from './directives/access.directive';
import { SearchPipePipe } from './pipe/search-pipe.pipe';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
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
    MatInputModule
  ]
})
export class MaterialModule { }
