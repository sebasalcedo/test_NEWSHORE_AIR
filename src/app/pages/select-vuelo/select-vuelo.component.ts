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


  originControl      = new FormControl<string | any>('');
  destinationControl = new FormControl<string | any>('');

  listVuelos:any[] = [];



  filterOrigin?      : Observable<any[]>;
  destinationOrigin? : Observable<any[]>;


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
      map(value => this._filterOrigin(value || '')),
    );

    this.destinationOrigin = this.destinationControl.valueChanges.pipe(
      startWith(''),
      map(value => this._destinationOrigin(value || '')),
    );

  }
  private _filterOrigin(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.listVuelos.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _destinationOrigin(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.listVuelos.filter(option => option.toLowerCase().includes(filterValue));
  }


  consulting(){
    this.dataService.getCitys()
    this.listVuelos = JSON.parse(localStorage.getItem('result') || ' ');
  }


  busquedaVuelo(){

         const origin = this.originControl.value;
         const destination = this.destinationControl.value;

        const una = this.dataService.getFilter(origin, destination)
      console.log( 'una',una);



  }


}
