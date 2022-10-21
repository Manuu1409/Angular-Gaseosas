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
  }

  cambiarcantidad (parametro) : void {
    parametro.PreventDefault(); {
      this.cambiarCantidad.emit(this.cantidad);
    }


  }

}
