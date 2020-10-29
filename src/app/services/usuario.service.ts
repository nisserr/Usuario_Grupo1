import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';

import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiURL = 'http://localhost:8080/api/usuarios'

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })}

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiURL);
  }
  
  actualizarcorreo(correo: string,){
    return this.http.put(`${this.apiURL}/actualizar/`,{correo: correo});
   }

   deleteusuario(rut : string){
     console.log('hola')
     return this.http.delete(`${this.apiURL}/${rut}/`,this.httpOptions);


   }
   

}
