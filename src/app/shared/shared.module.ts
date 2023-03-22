import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const exportcomponents =[
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    exportcomponents
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    exportcomponents
  ]
})
export class SharedModule { }
