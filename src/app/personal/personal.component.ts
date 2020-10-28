import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// Agregar una nueva columna a usuario que diga genero y edad
// Agregar minimo de 5 usuarios
// Agregar un cuadro informativo que muestre la cantidad de usuarios totales en componente Badge
// En el cuadro informativo que muestre la cantidad de mujeres y hombres
// En el cuadro informativo mostrar el nombre del mayo y el menor

  usuarios = [
    {rut: '1-9', nombres : ' Juan ', apellido: 'Perez', correo: 'a@a.cl'},
    {rut: '1-2', nombres : ' Carlos ', apellido: 'Perez', correo: 'b@b.cl'}
  ]

  columnas = ['rut', 'nombres', 'apellido', 'correo']

  toogleRut(){
    if(this.columnas.includes('rut')){
      this.columnas.splice(0,1);
    }else{
      this.columnas.unshift('rut');
    }
  }

  buttonLabel(){
    if(this.columnas.includes('rut')){
      return "Ocultar RUT";
    } else {
      return "Mostrar RUT";
    }
  }
}
