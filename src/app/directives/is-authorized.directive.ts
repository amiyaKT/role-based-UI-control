import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

interface Role {
  role: string;
  priviledge: string | null;
  attribute?: string | null;
  operation: 'hide' | 'disable';
}

@Directive({
  selector: '[isAuthorized]',
})
export class IsAuthorizedDirective {
  @Input()
  set isAuthorized(roleToCheck: Role) {
    const condition = this.authService.isAuthorized(
      roleToCheck.role,
      roleToCheck.priviledge || '',
      roleToCheck.attribute || ''
    );
    if (roleToCheck.operation === 'disable') {
      this.vcr.createEmbeddedView(this.templateRef);
      if (condition) {
        this.templateRef.elementRef.nativeElement.previousSibling.disabled = false;
      } else if (!condition) {
        this.templateRef.elementRef.nativeElement.disabled = true;
        this.templateRef.elementRef.nativeElement.previousSibling.disabled = true;
      }
    } else if (roleToCheck.operation === 'hide') {
      if (condition && !this.hasView) {
        this.vcr.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (!condition && this.hasView) {
        this.vcr.clear();
        this.hasView = false;
      }
    }
  }

  private hasView: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private authService: AuthorizationService
  ) {}
}
