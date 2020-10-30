import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { MatButtonModule,} from '@angular/material/button'


//modulo para servicios
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { RegistroComponent } from './registro/registro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogoComponent } from './dialogo/dialogo.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    BienvenidoComponent,
    RegistroComponent,
    DialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogoComponent]
})
export class AppModule { }
