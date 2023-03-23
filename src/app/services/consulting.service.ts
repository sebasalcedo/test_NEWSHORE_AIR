import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Vuelo0 } from './../interfaces/vuelo_o';

@Injectable({
  providedIn: 'root'
})
export class ConsultingService {

  public URL_API: string= 'https://recruiting-api.newshore.es/api/flights/'

  constructor(private _http: HttpClient) { }


getsearchVuelo(){
  this._http
  .get<Vuelo0>(
    `https://recruiting-api.newshore.es/api/flights/${0}`
  )
  .subscribe(
    (res) => {

      localStorage.setItem('result', JSON.stringify(res));
    },
    (err) => {
      console.log(err);
    }
  );
}


}
