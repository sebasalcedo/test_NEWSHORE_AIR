import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from './carrusel/carrusel.component';

const componentExports= [ CarruselComponent]
@NgModule({
  declarations: [
    componentExports
  ],
  imports: [
    CommonModule
  ],
  exports:[
    componentExports
  ]
})
export class ComponentsModule { }
