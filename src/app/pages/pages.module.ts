import { MaterialModule } from './../material.module';
import { ComponentsModule } from './../components/components.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';
import { IndexComponent } from './index/index.component';
import { SelectVueloComponent } from './select-vuelo/select-vuelo.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ PagesComponent, IndexComponent, SelectVueloComponent ],
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
