import { Injectable } from '@angular/core';
import { Egreso } from '../model/egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  egresos:Egreso[]=[
    new Egreso("egreso1", 750),
    new Egreso("egreso2", 1750),
    new Egreso("Egreso3", 2750),
    new Egreso("egreso4", 3750)
  ];

  constructor() { }

  eliminar(egreso:Egreso){
    this.egresos.splice(this.egresos.indexOf(egreso),1);
  }


  agregarRegistro(egreso:Egreso){
    this.egresos.push(egreso);
  }


}
