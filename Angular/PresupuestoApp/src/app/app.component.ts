import { Component } from '@angular/core';
import { Ingreso } from './model/ingreso.model';
import { Egreso } from './model/egreso.model';
import { IngresoService } from './servicios/ingreso.service';
import { EgresoService } from './servicios/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PresupuestoApp';
  ingresos:Ingreso[] = [];
  egresos:Egreso[] = [];

  constructor(private ingresoService:IngresoService,
              private egresoService:EgresoService) {
                this.ingresos = this.ingresoService.ingresos;
                this.egresos = this.egresoService.egresos;
              }

  ngOnInit() {
  }

  getIngresoTotal(){
    let ingresoTotal:number=0;
    this.ingresos.forEach(ingreso=>{ingresoTotal+=ingreso.valor});
    return ingresoTotal;
  }
  getEgresoTotal(){
    let egresoTotal:number=0;
    this.egresos.forEach(egreso=>{egresoTotal+=egreso.valor});
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal();
  }

}
