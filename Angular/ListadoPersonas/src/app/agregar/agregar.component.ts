import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../modelo/persona.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Output() personaCreada = new EventEmitter<Persona>();
  nombre:string='';
  apellido:string='';

  agregarPersona(){
    if(this.nombre!=''&&this.apellido!=''){
      let persona = new Persona(this.nombre,this.apellido);
      this.nombre='';
      this.apellido='';
      this.personaCreada.emit(persona);
      //alert("Persona agregada!")
    }
  }

}
