import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const roles = {
  'role-1': {
    'priviledge-1': {
      attributes: ['a1', 'a2'],
    },
    'priviledge-2': {
      attributes: ['a1', 'a3', 'a4'],
    },
  },
  'role-2': {
    'priviledge-1': {
      attributes: ['a1', 'a2'],
    },
    'priviledge-2': {
      attributes: ['a3', 'a4'],
    },
  },
};

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    const role1 = JSON.stringify(roles['role-1']);
    const role2 = JSON.stringify(roles['role-2']);

    localStorage.setItem('role-1', role1);
    localStorage.setItem('role-2', role2);
  })
  .catch((err) => console.error(err));
