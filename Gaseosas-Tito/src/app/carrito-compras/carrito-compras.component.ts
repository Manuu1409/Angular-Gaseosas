import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoGaseosaService } from '../carrito-gaseosa.service';
import { Gaseosa } from '../lista-gaseosas/Gaseosas';



@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})
export class CarritoComprasComponent implements OnInit {

  carritoCompras$: Observable<Gaseosa[]> ;

  constructor(private carrito: CarritoGaseosaService) { 
    this.carritoCompras$ = carrito.carritoCompras.asObservable();
    console.log(this.carritoCompras$);
    
  }

  ngOnInit(): void {
  }

}
