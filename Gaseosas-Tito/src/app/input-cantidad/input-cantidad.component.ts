import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gaseosa } from '../lista-gaseosas/Gaseosas';


@Component({
  selector: 'app-input-cantidad',
  templateUrl: './input-cantidad.component.html',
  styleUrls: ['./input-cantidad.component.scss']
})
export class InputCantidadComponent implements OnInit {

  constructor() { }
  @Input()
  cantidad!: number; 

  @Input()
  max!:number;

  @Output()
  cambiarCantidad: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxGaseosas: EventEmitter<string> = new EventEmitter<string>();
  

  

  ngOnInit(): void {
  }

  disminuir() : void  {
    if(this.cantidad > 0) {
    this.cantidad--;
    this.cambiarCantidad.emit(this.cantidad);
    }
}

  aumentar() : void  {
    if(this.cantidad < this.max) {
    this.cantidad++;
    this.cambiarCantidad.emit(this.cantidad);
    }
    else
    this.maxGaseosas.emit("Maximo de gaseosas alcanzada");
  }

  cambiarcantidad (parametro) : void {
    parametro.PreventDefault(); {
      this.cambiarCantidad.emit(this.cantidad);
    }


  }

}
