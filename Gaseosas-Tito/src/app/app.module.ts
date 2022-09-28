import { NgModule, LOCALE_ID } from '@angular/core';   //locale_id es un token para saber tu localizacion
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';  // estos 2 import es para cambiar el idioma de la fecha en español comando ng add @angular/localize 
import localEs from '@angular/common/locales/es'

registerLocaleData(localEs);


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaGaseosasComponent } from './lista-gaseosas/lista-gaseosas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaGaseosasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
