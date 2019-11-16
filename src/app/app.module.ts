import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  AngularMaterialModule } from './angular-material.module';

import { LoginComponent } from './components/users/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { InicioComponent } from './components/users/inicio/inicio.component';
import { PerfilComponent } from './components/users/perfil/perfil.component';
import { EditarPerfilComponent } from './components/users/editar-perfil/editar-perfil.component';
import { ProductosComponent } from './components/productos/productos.component';
import { BodegasComponent } from './components/bodegas/bodegas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    InicioComponent,
    PerfilComponent,
    EditarPerfilComponent,
    ProductosComponent,
    BodegasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
