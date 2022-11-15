import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-cantidad',
  templateUrl: './input-cantidad.component.html',
  styleUrls: ['./input-cantidad.component.scss']
})
export class InputCantidadComponent implements OnInit {

  constructor() { }
  @Input()
  'cantidad': number; 

  @Input()
  'max':number;

  @Output()
  'cantidadChange': EventEmitter<number> = new EventEmitter<number>();

  @Output()
  'maxGaseosas': EventEmitter<string> = new EventEmitter<string>();
  

  ngOnInit(): void {
  }

  disminuir() : void  {
    if(this.cantidad > 0) {
    this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
    }
}

  aumentar() : void  {
    if(this.cantidad < this.max) {
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
    }
    else
    this.maxGaseosas.emit("Maximo de gaseosas alcanzada");
  }

  cambiarcantidad() : void {
      console.log(this.cantidad);
      console.log("hola");
      this.cantidadChange.emit(this.cantidad) 

  }

}
