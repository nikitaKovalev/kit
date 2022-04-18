import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainView } from './main.view';
import { InputView } from './views';

const routes: Routes = [
  {
    path: '',
    component: MainView,
    children: [
      {
        path: 'input',
        component: InputView,
      },
      {
        path: '',
        redirectTo: 'input',
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'input'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
