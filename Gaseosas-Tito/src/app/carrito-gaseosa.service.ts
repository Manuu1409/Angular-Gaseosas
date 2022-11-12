import { Injectable } from '@angular/core';
import { Gaseosa } from './lista-gaseosas/Gaseosas';


@Injectable({
  providedIn: 'root'
})
export class CarritoGaseosaService {
  carritoCompras: Gaseosa [] = [];
  
  constructor() { }

  AgregarAlCarrito(gaseosas : Gaseosa) {
    let item : Gaseosa | undefined = this.carritoCompras.find((v1) => v1.nombre == gaseosas.nombre);
    if(!item) {
      this.carritoCompras.push({... gaseosas});
    }
    else {
      item.cantidad += gaseosas.cantidad;
    }
    console.log(this.carritoCompras);
    
  }
  
}
