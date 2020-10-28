import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';
import { Empleado } from '../interfaces/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados:Empleado [];

  constructor( private empleadosService: EmpleadosService ) { }

  columnas = ['rut', 'nombre', 'apellido', 'salario'];

  ngOnInit(): void {
    this.getEmpService();
  }

   getEmpService(){
    this.empleadosService
    .getEmpleados()
    .subscribe(
      res => {

        this.empleados = res;
        console.log(this.empleados)
      },
      err => {
        console.log(err)
      }
    )
  }

}
