import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Configuracion } from 'src/app/modelo/configuracion.model';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  configuracion:Configuracion = {permitirRegistro:false,};

  constructor(private router:Router,
              private configuracionServicio:ConfiguracionService) { }

  ngOnInit() {
    this.configuracionServicio.getConfiguracion().subscribe(
      (configuracion:Configuracion)=>{
          this.configuracion = configuracion;
      }
    )
  }

  guardar(){
    this.configuracionServicio.modificarConfiguracion(this.configuracion);
    this.router.navigate(['/']);
  }

}
