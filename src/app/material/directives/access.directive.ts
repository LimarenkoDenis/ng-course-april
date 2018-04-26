import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appAccess]'
})
export class AccessDirective {
  @Input()
  public set appAccess(roles: string[]) {
    let currentRole: string = '';
    try {
      currentRole = window.localStorage.getItem('role');
    } catch (err) {
      this._viewContainer.clear();
    }

    if (roles.includes(currentRole)) {
      this._viewContainer.createEmbeddedView(this._templateRef);
      return;
    }
    this._viewContainer.clear();
    return;


  }

  public constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
  ) { }


}
