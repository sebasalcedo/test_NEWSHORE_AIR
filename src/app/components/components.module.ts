import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';


const componentExports= [ SelectComponent, InputComponent,CardComponent]
@NgModule({
  declarations: [
    componentExports,


      ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    componentExports
  ]
})
export class ComponentsModule { }
