import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from '../modelo/persona.model';
import { LoggingInterface } from './LoggingInterface';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {

  edicion:EventEmitter<number> = new EventEmitter<number>();
  listado: Persona[] = [];

  constructor(private logging: LoggingInterface,
              private dataService: DataService) {}

  personaPush(persona:Persona){
    this.logging.logging(`Ingresando resgistro al listado: ${persona.nombre} ${persona.apellido}`);
    if(this.listado == null){
      this.listado = [];
    }
    this.listado.push(persona);
    this.dataService.guardarPersonas(this.listado);
  }

  setPersonas(personas:Persona[]){
    this.listado = personas;
  }

  obtenerPersonas(){
    return this.dataService.cargarPersonas();
  }

  encontrarPersona(indice:number){
    let persona:Persona = this.listado[indice];
    return persona;
  }

  modificarPersona(indice:number,persona:Persona){
    let persona1 = this.listado[indice];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataService.modificarPersona(indice,persona);
  }

  eliminar(indice:number){
    this.listado.splice(indice,1);
    this.dataService.eliminarPersona(indice);
//para no agregar un indice especifico a la clase persona usamos en que viene por la posicion en
//arreglo que tambien es el mismo en ddbb insisto con que esta mal, pero es para resolver el ejercicio
//nada mas, por eso ahora, para que no queden indices vacios, recargamos los datos en la ddbb
    this.modificarPersonas();
  }

  modificarPersonas(){
    if(this.listado!=null){
      this.dataService.guardarPersonas(this.listado);
    }
  }
}
