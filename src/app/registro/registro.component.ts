import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router,private Usuarioserv:UsuarioService) { }

  ngOnInit(): void {
  }
  user: string = '';
  password: string = '';
  rut: string = '';

  validar():void {
    if (this.password.length > 4 && /\d/.test(this.password)) {
      this.Usuarioserv.agregarusuario(this.rut,this.user,this.password).subscribe(x => console.log('deberia agregar'))
     

      this.router.navigate(['usuarios'])
    }else{
      this.router.navigate(['registro'])
    }
  }



}

