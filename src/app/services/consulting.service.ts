import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Vuelo0 } from './../interfaces/vuelo_o';

@Injectable({
  providedIn: 'root',
})
export class ConsultingService {
  constructor(private _http: HttpClient) {}

  getCitys() {
    this._http
      .get<Vuelo0>(`https://recruiting-api.newshore.es/api/flights/${2}`)
      .subscribe(
        (res: Vuelo0) => {
          const data = Object.values(res);
          const filterData = data
            .map(destination => destination.arrivalStation)
            .filter((value, index, array) => array.indexOf(value) === index);

          localStorage.setItem('result', JSON.stringify(filterData));
        },
        err => {
          console.log(err);
        }
      );
  }


  getVuelosFilter(): Observable<any>{
   return this._http
    .get<Vuelo0>(`https://recruiting-api.newshore.es/api/flights/${2}`)
  }


  getFilter(origin: string, destination: string) {
    let data;
    this._http
      .get<Vuelo0>(`https://recruiting-api.newshore.es/api/flights/${2}`)
      .subscribe(
        (res: Vuelo0) => {
           data = Object.values(res)
                            .filter(
                                    vuelo =>
                                      vuelo.departureStation == origin &&
                                      vuelo.arrivalStation == destination
          );
          return data;

        },
        err => {
          console.log(err);
        }
      );
  }
}
