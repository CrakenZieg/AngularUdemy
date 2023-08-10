import { Component, OnInit } from '@angular/core';
import { Persona } from '../modelo/persona.model';
import { LoggingInterface } from '../servicios/LoggingInterface';
import { PersonasService } from '../servicios/personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  listado: Persona[] = [];

  constructor(
    private logging: LoggingInterface,
    private personaService: PersonasService,
    private router:Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.personaService.obtenerPersonas().subscribe(
      (personas:Persona[])=>{
        this.listado = personas;
        this.personaService.setPersonas(personas);
      });
  }

  personaPush(persona: Persona) {
    this.personaService.personaPush(persona);
    //this.logging.logging(`Ingresando resgistro al listado: ${persona.nombre} ${persona.apellido}`);
  }

  agregar(){
    this.router.navigate(['personas/agregar']);
  }
}
