import { Component, OnInit } from '@angular/core';
import { CarritoGaseosaService } from '../carrito-gaseosa.service';
import { GaseosaDataService } from '../gaseosa-data.service';
import { Gaseosa } from './Gaseosas';

@Component({
  selector: 'app-lista-gaseosas',
  templateUrl: './lista-gaseosas.component.html',
  styleUrls: ['./lista-gaseosas.component.scss']
})
export class ListaGaseosasComponent implements OnInit {

  Gaseosas: Gaseosa[] = [
   /* {
    nombre : "Fanta",
    sabor : "Naranja",
    precio : 85,
    stock : 0,
    imagen: "assets/fanta.jpg",
    cantidad: 0,
    
  },
  {
    nombre : "Sprite",
    sabor : "Limon",
    precio : 95,
    stock : 18,
    imagen: "assets/sprite.jpg",
    cantidad: 0,
    
  },
  {
    nombre : "SevenUp",
    sabor : "Lima-Limon",
    precio : 70,
    stock : 10,
    imagen: "assets/sevenup.jpg",
    cantidad: 0,
    
  }
*/
  ];

  

  constructor(private carrito: CarritoGaseosaService, private GaseosasService: GaseosaDataService) {
    
   }

  ngOnInit(): void {
    this.GaseosasService.ObtenerGaseosas()
    .subscribe(Gaseosas => this.Gaseosas = Gaseosas);
  }

  AgregarAlCarrito(gaseosas: Gaseosa) : void {
    this.carrito.AgregarAlCarrito(gaseosas);
    gaseosas.stock -= gaseosas.cantidad;
    gaseosas.cantidad = 0;
  }

  maxGaseosas(m: string) {
    alert(m);
  }


}
