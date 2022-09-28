import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoGaseosasTitoComponent } from './contacto-gaseosas-tito/contacto-gaseosas-tito.component';
import { GaseosaTitoGaseosasComponent } from './gaseosa-tito-gaseosas/gaseosa-tito-gaseosas.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "Gaseosas",
  },
  {
    path: "Gaseosas",
    component: GaseosaTitoGaseosasComponent
  },

  {
    path: "Contacto",
    component: ContactoGaseosasTitoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
