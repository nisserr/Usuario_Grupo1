import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UsuarioComponent } from './usuario/usuario.component';
import { RegistroComponent } from './registro/registro.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { DialogoComponent } from './dialogo/dialogo.component';

const routes: Routes = [
  {
    path: '',
    component: BienvenidoComponent
  },
  
  {
    path: 'usuarios',
    component: UsuarioComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
   {
     path: 'dialogo',
     component: DialogoComponent
   }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
