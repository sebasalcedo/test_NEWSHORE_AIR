import { ViewVuelosComponent } from './view-vuelos/view-vuelos.component';
import { SelectVueloComponent } from './select-vuelo/select-vuelo.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';



const routes: Routes = [

  {
    path: 'bienvenida',
    component: PagesComponent,
    children:[

      { path: 'vuelos', component:SelectVueloComponent},
      { path: 'listVuelos', component:ViewVuelosComponent, data: {animation: 'vuelos'} }

    ]

},


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
