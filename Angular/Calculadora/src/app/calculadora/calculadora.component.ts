import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  operandoA:number = 0;
  operandoB:number = 0;
  resultado:number = 0;

  constructor() { }

  ngOnInit() {
  }

  sumar(){
    this.resultado = this.operandoA + this.operandoB;
  }

}
