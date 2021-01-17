import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { RouterModule } from '@angular/router';
import { CustomDirectivesModule } from '../custom-directives/custom-directives.module';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ButtonsComponent,
      },
    ]),
    CustomDirectivesModule,
  ],
})
export class Role2Module {}
