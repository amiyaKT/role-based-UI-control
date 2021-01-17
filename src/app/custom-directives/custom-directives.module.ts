import { NgModule } from '@angular/core';
import { IsAuthorizedDirective } from '../directives/is-authorized.directive';

@NgModule({
  declarations: [IsAuthorizedDirective],
  exports: [IsAuthorizedDirective],
})
export class CustomDirectivesModule {}
