import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppMaterialModule } from './app-material/app-material.module';
import { ClimaComponent } from './clima/clima.component';

//modulo para servicios
import { HttpClientModule } from '@angular/common/http';
import { EmpleadosComponent } from './empleados/empleados.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { RegistroComponent } from './registro/registro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent,
    EmpleadosComponent,
    UsuarioComponent,
    BienvenidoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
