import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// ng generate service serivices/clima

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  apiKey: string = '820d1abfb250e1040de0a478ca99aacd';
  apiURL: string  = ''

  // su api
  // apiURL: string = 'localhost:8080/peliculas

  constructor(private http: HttpClient ) {
    // solo para ejemplo
    this.apiURL = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
   }

   getWeather(ciudad: string , pais: string) {
     return this.http.get(`${this.apiURL}${ciudad},${pais}`);
   }

   // ejercicio
   getPelicla(nombre: string){
    return this.http.get(`${this.apiURL}/${nombre}`);
   }


}
