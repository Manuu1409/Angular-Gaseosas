import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Gaseosa } from './lista-gaseosas/Gaseosas';


@Injectable({
  providedIn: 'root'
})
export class CarritoGaseosaService {

  private _carritoCompras : Gaseosa[] = [];
  carritoCompras:BehaviorSubject <Gaseosa[]>  = new  BehaviorSubject(this._carritoCompras);
  
  constructor() { }

  AgregarAlCarrito(gaseosas : Gaseosa) {
    let item : Gaseosa | undefined
    item = this._carritoCompras.find((v1) => v1.nombre == gaseosas.nombre);
    if(!item) {
      this._carritoCompras.push({... gaseosas});
      
    }
    else {
      item.cantidad += gaseosas.cantidad;
    }
    console.log(this._carritoCompras);
    this.carritoCompras.next(this._carritoCompras);
    
  }
  
}
