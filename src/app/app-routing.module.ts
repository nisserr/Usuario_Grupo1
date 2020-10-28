import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { ClimaComponent } from './clima/clima.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalComponent
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
    path: 'Usuarios',
    component: UsuarioComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
