import { MaterialModule } from './../material.module';
import { ComponentsModule } from './../components/components.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';
import { SelectVueloComponent } from './select-vuelo/select-vuelo.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { ViewVuelosComponent } from './view-vuelos/view-vuelos.component';



@NgModule({
  declarations: [ PagesComponent,  SelectVueloComponent, ViewVuelosComponent ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ComponentsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ PagesComponent ]
})
export class PagesModule { }
