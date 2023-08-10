import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Persona } from '../../modelo/persona.model';
import { LoggingInterface } from '../../servicios/LoggingInterface';
import { PersonasService } from '../../servicios/personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  @Output() personaCreada = new EventEmitter<Persona>();
  nombre: string = '';
  apellido: string = '';
  indice:number;
  modoEdicion:number;
  @ViewChild('nombreLocalRef') nombreInput: ElementRef;
  @ViewChild('apellidoLocalRef') apellidoInput: ElementRef;

  constructor(
    private logging: LoggingInterface,
    private personaService: PersonasService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    this.personaService.edicion.subscribe((indice:number)=>{
      this.nombre = this.personaService.listado[indice].nombre;
      this.apellido = this.personaService.listado[indice].apellido;
    });
  }

  ngOnInit(){
    this.indice = this.route.snapshot.params['id'];
    this.modoEdicion = Number.parseInt(this.route.snapshot.queryParams['modificar']); //o podemos agregar simplemente '+' delante y se parsea a number
    if(this.modoEdicion!=null && this.modoEdicion === 1){
      let persona:Persona = this.personaService.encontrarPersona(this.indice);
      this.nombre = persona.nombre;
      this.apellido = persona.apellido;
    }
  }

  onGuardarPersona(){
    let persona = new Persona(this.nombre, this.apellido);
    if(this.modoEdicion!=null && this.modoEdicion === 1){
      this.personaService.modificarPersona(this.indice,persona);
    } else{
      this.personaService.personaPush(persona);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.indice!=null){
      this.personaService.eliminar(this.indice);
    }
    this.router.navigate(['personas']);
  }

  agregarPersonaModel() {
    if (this.nombre != '' && this.apellido != '') {
      let persona = new Persona(this.nombre, this.apellido);
      this.nombre = '';
      this.apellido = '';
      this.logging.logging('Agregada Persona mediante ngModel');
      this.personaCreada.emit(persona);
      //alert("Persona agregada!")
    }
  }
  agregarPersonaLocal(nombre: HTMLInputElement, apellido: HTMLInputElement) {
    if (nombre.value != '' && apellido.value != '') {
      let persona = new Persona(nombre.value, apellido.value);
      this.logging.logging('Agregada Persona mediante LocalReference');
      this.personaCreada.emit(persona);
      //alert("Persona agregada!")
    }
  }
  agregarPersonaViewChild() {
    if (
      this.nombreInput.nativeElement.value != '' &&
      this.apellidoInput.nativeElement.value != ''
    ) {
      let persona = new Persona(
        this.nombreInput.nativeElement.value,
        this.apellidoInput.nativeElement.value
      );
      this.logging.logging('Agregada Persona mediante ViewChild');
      this.personaCreada.emit(persona);
      //alert("Persona agregada!")
    }
  }
  agregarPersonaService() {
    if (this.nombre != '' && this.apellido != '') {
      let persona = new Persona(this.nombre, this.apellido);
      this.nombre = '';
      this.apellido = '';
      this.logging.logging('Agregada Persona mediante Service');
      this.personaService.personaPush(persona);
    }
  }
}
