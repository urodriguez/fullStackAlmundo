import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';

import { Hotel } from '../models/Hotel'
import { URL_API_HOTELS } from '../rutas';

@Injectable()
export class HotelServices {
  private proveedores: Array<any>;

  constructor(private http:Http) {
    console.log("INICIALIZANDO hoteles SERVIRCE");
  }

  getHoteles(): Observable<Hotel[]>  {
    console.log("HACIENDO REQUEST");
    return this.http.get(URL_API_HOTELS).map((response) => response.json().hotels)
  }

}