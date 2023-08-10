import { Injectable } from '@angular/core';
import { Ingreso } from '../model/ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  ingresos:Ingreso[]=[
    new Ingreso("ingreso1", 1000),
    new Ingreso("ingreso2", 2000),
    new Ingreso("ingreso3", 3000),
    new Ingreso("ingreso4", 4000)
  ];

  constructor() { }

  eliminar(ingreso:Ingreso){
    this.ingresos.splice(this.ingresos.indexOf(ingreso),1);
  }

  agregarRegistro(ingreso:Ingreso){
    this.ingresos.push(ingreso);
  }

}
