import { Component, EventEmitter, Output } from '@angular/core';

import { Moneda } from 'src/app/interfaces/modena';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

  selectedValue = ' ';
  seleccion: Moneda[] = [
    {value: '4773', viewValue: 'Pesos Colombianos'},
    {value: '18.55', viewValue: 'Pesos Mexicanos'},
    {value: ' ', viewValue: 'Dolares'},
  ];


  @Output() monedaEvent = new EventEmitter<string>();


  sendMessage() {
    this.monedaEvent.emit(this.selectedValue);
  }

}
