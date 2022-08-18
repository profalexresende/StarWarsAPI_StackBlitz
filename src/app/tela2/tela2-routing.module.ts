import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tela2Component } from './tela2.page';

const routes: Routes = [
  
  {
    path: '',
    component: Tela2Component
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tela2RoutingModule { }