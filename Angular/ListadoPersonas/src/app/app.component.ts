import { Component, Output } from '@angular/core';
import { Persona } from './modelo/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Listado de personas';
  listado:Persona[]=[
    new Persona('Mau1','Mau1'),
    new Persona('Mau2','Mau2'),
    new Persona('Mau3','Mau3'),
  ];

  personaPush(persona:Persona){
    this.listado.push(persona);
  }

}
