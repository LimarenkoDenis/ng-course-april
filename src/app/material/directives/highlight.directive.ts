import { Directive, HostListener, ElementRef } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  public constructor(
    private _el: ElementRef
  ) {}

  @HostListener('mouseenter')
  public mouseenter(): void {
    this._el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  public mouseleave(): void {
    this._el.nativeElement.style.backgroundColor = null;
  }

}
