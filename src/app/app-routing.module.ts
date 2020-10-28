import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClimaComponent } from './clima/clima.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistroComponent } from './registro/registro.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

const routes: Routes = [
  {
    path: '',
    component: BienvenidoComponent
  },
  {
    path: 'clima',
    component: ClimaComponent
  },
  {
    path: 'empleados',
    component: EmpleadosComponent
  },
  {
    path: 'usuarios',
    component: UsuarioComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
