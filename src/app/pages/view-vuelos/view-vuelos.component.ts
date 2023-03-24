import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import {  animationList } from './../animations';
@Component({
  selector: 'app-view-vuelos',
  templateUrl: './view-vuelos.component.html',
  styleUrls: ['./view-vuelos.component.css'],
  animations: [
    animationList
  ],
})
export class ViewVuelosComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  listadoVuelos: any[] = [];


  constructor(private _formBuilder: FormBuilder,private _snackBar: MatSnackBar, private router:Router) {

    this.listadoVuelos= JSON.parse(localStorage.getItem('searchFlight') || ' ');
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


  volver(): void {
    this.router.navigate(["/bienvenida/vuelos"]);

  }
}
