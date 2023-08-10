import { Component, Input } from '@angular/core';
import { Persona } from '../../modelo/persona.model';
import { PersonasService } from '../../servicios/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() persona:Persona;
  @Input() indice:number;

  constructor(private personaService: PersonasService){}

  editar(){
    this.personaService.edicion.emit(this.indice);
  }

}
