import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { UsuarioService } from '../services/usuario.service'


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  Usuarios: Usuario[];

  constructor(private UsuarioServ: UsuarioService) { }

  columnas = ['rut','correo','contraseña'];

  ngOnInit(): void {
    this.getUsuarioServ()
  }

  getUsuarioServ() {
    this.UsuarioServ
      .getUsuarios()
      .subscribe(
        res => {
          this.Usuarios= res;
          console.log(this.Usuarios)
        },
        err => {
          console.log(err)
        }
      )
  }

}
