import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { UsuarioService } from '../services/usuario.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  Usuarios: Usuario[];


  constructor(private UsuarioServ: UsuarioService) { }

  columnas = ['rut','correo','contraseña','borrar','modificar'];

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
  

  deleteUsuario(rut){
    this.UsuarioServ.deleteusuario(rut).subscribe(x => console.log('kjhak'))
    console.log(rut);
  }

  actualizarcorreo(correo,rut){
    this.UsuarioServ.actualizarcorreo(correo,rut).subscribe(x => console.log('actualizarcorreo'))
  }

  agregarusuario(rut,correo,contraseña){
    this.UsuarioServ.agregarusuario(rut,correo,contraseña).subscribe(x => console.log('metodoagregar'))
  }


 



}


