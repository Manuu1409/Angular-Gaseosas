import { Component, OnInit } from '@angular/core';
import { CarritoGaseosaService } from '../carrito-gaseosa.service';



@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})
export class CarritoComprasComponent implements OnInit {

  constructor(private carrito: CarritoGaseosaService) { }

  ngOnInit(): void {
  }

}
