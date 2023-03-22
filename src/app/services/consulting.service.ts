import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultingService {

  public URL_API: string= 'https://recruiting-api.newshore.es/api/flights/'

  constructor(private _http: HttpClient) { }



  getData(): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')


    return this._http.get(`https://recruiting-api.newshore.es/api/flights/${0}`, { headers: headers });
  }
}
