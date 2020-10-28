import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { ClimaComponent } from './clima/clima.component';
import { EmpleadosComponent } from './empleados/empleados.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
