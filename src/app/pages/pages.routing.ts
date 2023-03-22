import { SelectVueloComponent } from './select-vuelo/select-vuelo.component';
import { IndexComponent } from './index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';



const routes: Routes = [

  {
    path: 'bienvenida',
    component: PagesComponent,
    children:[
      { path: 'index', component: IndexComponent },
      { path: 'vuelos', component:SelectVueloComponent}

    ]

},


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
