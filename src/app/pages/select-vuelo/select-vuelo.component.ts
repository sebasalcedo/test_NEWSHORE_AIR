import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, ViewChild } from '@angular/core';

import { animationSearch } from '../animations';
import { Vuelo0 } from './../../interfaces/vuelo_o';
import { SelectComponent } from './../../components/select/select.component';
import { ConsultingService } from './../../services/consulting.service';

@Component({
  selector: 'app-select-vuelo',
  templateUrl: './select-vuelo.component.html',
  styleUrls: ['./select-vuelo.component.css'],
  animations: [animationSearch],
})
export class SelectVueloComponent {
  origin = 'flight_takeoff';

  destination = 'flight_land';

  listVuelos: string[] = [];
  originCity = '';
  destinationCity = '';

  first = 'first';
  second = 'second';

  monedaSelecionada = '';

  @ViewChild(SelectComponent) selecion = ' ';

  vuelosEncontrados: Vuelo0[] = [];

  constructor(
    private dataService: ConsultingService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.consulting();
  }

  consulting() {
    this.dataService.getCitys();
    this.listVuelos = JSON.parse(localStorage.getItem('result') || ' ');
  }

  receiveMessage($event: string) {
    this.originCity = $event;
  }

  receiveMessage2($event: string) {
    this.destinationCity = $event;
  }

  receiveSelect($event: string) {
    this.monedaSelecionada = $event;
  }

  async searchVuelo() {
    if (this.originCity == null || this.originCity == ' ') {
      this.openSnackBar('Debes selecionar un origen', 'Cerrar');
    } else if (this.destinationCity == null || this.destinationCity == ' ') {
      this.openSnackBar('Debes selecionar un destino', 'Cerrar');
    } else {
      await this.dataService.getVuelosFilter().subscribe(
        (res: Vuelo0) => {
          this.vuelosEncontrados = Object.values(res).filter(
            (vuelo: Vuelo0) =>
              vuelo.departureStation == this.originCity &&
              vuelo.arrivalStation == this.destinationCity
          );
          const data:any[] =[];

          for (let index = 0; index < this.vuelosEncontrados.length; index++) {
            const element = this.vuelosEncontrados[index];
            const generadorJson: any = {
              departureStation: element.departureStation,
              arrivalStation: element.arrivalStation,
              flightCarrier: element.flightCarrier,
              flightNumber: element.flightNumber,
              price: element.price,
              moneda: this.monedaSelecionada,
            };

            data.push(generadorJson);
          }


          if (data) {
            localStorage.setItem('searchFlight', JSON.stringify(data));

            this.router.navigateByUrl('/bienvenida/listVuelos');
          } else {
            this.openSnackBar('No tenemos vuelos disponble ', 'Cerrar');
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
