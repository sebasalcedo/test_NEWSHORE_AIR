import { ConsultingService } from './../../services/consulting.service';
import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-select-vuelo',
  templateUrl: './select-vuelo.component.html',
  styleUrls: ['./select-vuelo.component.css']
})
export class SelectVueloComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;


  constructor(private _formBuilder: FormBuilder, private dataService: ConsultingService){
    this.consulting();
  }


  consulting(){
    this.dataService.getData().subscribe(
      res => {
console.log(res);
      },err => {
        console.log(err);
      }
    )
  }


}
