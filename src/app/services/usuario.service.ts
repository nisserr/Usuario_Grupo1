import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';
import { HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiURL = 'http://localhost:8080/api/usuarios'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiURL);
  }
  
  actualizarcorreo(correo: string){
    return this.http.get(`${this.apiURL}/actualizar/`);
   }

   deleteusuario(rut : string){
     return this.http.delete(`${this.apiURL}/${rut}/`);

   }
   

}
