import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'role-1',
  },
  {
    path: 'role-1',
    loadChildren: () =>
      import('./role-1/role-1.module').then((m) => m.Role1Module),
  },
  {
    path: 'role-2',
    loadChildren: () =>
      import('./role-2/role-2.module').then((m) => m.Role2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
