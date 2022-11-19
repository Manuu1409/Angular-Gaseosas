import { NgModule, LOCALE_ID } from '@angular/core';   //locale_id es un token para saber tu localizacion
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';  // estos 2 import es para cambiar el idioma de la fecha en español comando ng add @angular/localize 
import localEs from '@angular/common/locales/es'

registerLocaleData(localEs);


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaGaseosasComponent } from './lista-gaseosas/lista-gaseosas.component';
import { ContactoGaseosasTitoComponent } from './contacto-gaseosas-tito/contacto-gaseosas-tito.component';
import { GaseosaTitoGaseosasComponent } from './gaseosa-tito-gaseosas/gaseosa-tito-gaseosas.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { InputCantidadComponent } from './input-cantidad/input-cantidad.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ListaGaseosasComponent,
    ContactoGaseosasTitoComponent,
    GaseosaTitoGaseosasComponent,
    CarritoComprasComponent,
    InputCantidadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,   //el provide es para que ande en español
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
