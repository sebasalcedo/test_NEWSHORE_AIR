import { Vuelo0 } from './../../interfaces/vuelo_o';
import { ConsultingService } from './../../services/consulting.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';


export interface User {
  name: string;
}

@Component({
  selector: 'app-select-vuelo',
  templateUrl: './select-vuelo.component.html',
  styleUrls: ['./select-vuelo.component.css']
})
export class SelectVueloComponent implements OnInit{


  originControl      = new FormControl<string | Vuelo0>('');
  destinationControl = new FormControl<string | Vuelo0>('');

  listVuelos: Vuelo0[] = [];



  filterOrigin?      : Observable<Vuelo0[]>;
  destinationOrigin? : Observable<Vuelo0[]>;


  firstFormGroup = this._formBuilder.group({
    origin: ['', Validators.required],
    destination: ['', Validators.required],

  });




  isLinear = true;


  constructor(private _formBuilder: FormBuilder, private dataService: ConsultingService){
    this.consulting();
  }

  ngOnInit() {

    this.filterOrigin = this.originControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const departureStation = typeof value === 'string' ? value : value?.departureStation;
        return departureStation ? this._filterdeparture(departureStation as string) : this.listVuelos.slice();
      }),
    );


    this.destinationOrigin = this.destinationControl.valueChanges.pipe(
      startWith(''),
      map( value => {
        const arrivalStation = typeof value === 'string' ? value: value?.arrivalStation;
        return arrivalStation ? this._filterArrival( arrivalStation as string) :this.listVuelos.slice();
      })
    )
  }

  displayFndeparture(departure: Vuelo0): string {
    return departure && departure.departureStation ? departure.departureStation : '';
  }


  displayFnArrival(arrival: Vuelo0): string {
    return arrival && arrival.arrivalStation ? arrival.arrivalStation : '';
  }



  private _filterdeparture(departure: string): Vuelo0[] {
    const filterValue = departure.toLowerCase();

    return this.listVuelos.filter(option => option.departureStation.toLowerCase().includes(filterValue));

  }


  private _filterArrival( arrival: string ):Vuelo0[]{
    const filterValue = arrival.toLowerCase();

    return this.listVuelos.filter( option => option.arrivalStation.toLowerCase().includes(filterValue))
  }

  consulting(){
    this.dataService.getsearchVuelo()
    // this.listVuelos = JSON.parse(localStorage.getItem('result') || ' ');
  }


  busquedaVuelo(){
        console.log(this.originControl || ' ');
  }


}
