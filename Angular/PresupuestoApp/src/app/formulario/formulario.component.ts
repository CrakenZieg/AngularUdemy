import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../servicios/ingreso.service';
import { EgresoService } from '../servicios/egreso.service';
import { Ingreso } from '../model/ingreso.model';
import { Egreso } from '../model/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string="ingreso";
  descripcionInput:string;
  valorInput:number;

  constructor(private ingresoService:IngresoService,
              private egresoService:EgresoService) { }

  ngOnInit() {
  }

  tipoOperacion(valor:string){
    this.tipo = valor;
  }

  agregarRegistro(){
    if (this.descripcionInput!="" && this.descripcionInput!=null && !Number.isNaN(this.valorInput) && this.valorInput!=null){
      if(this.tipo === "ingreso"){
        this.ingresoService.agregarRegistro(new Ingreso(this.descripcionInput,this.valorInput));
      } else {
        this.egresoService.agregarRegistro(new Egreso(this.descripcionInput,this.valorInput));
      }
    }
  }

}
