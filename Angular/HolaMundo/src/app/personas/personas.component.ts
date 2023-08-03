import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-personas',
	templateUrl: './personas.component.html',
	styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

	deshabilitar:boolean = false;
	mensaje:string = "";
	titulo:string = 'Titulo';
  mostrar:boolean = false;

	constructor() { }

	ngOnInit() {
	}

	agregarPersona(){
		this.mensaje = "Persona agregada";
    this.mostrar = true;
	}

//No usaremos este metodo ya que usamos Two Way binding
	modificarTitulo(event:Event){
		this.titulo = (<HTMLInputElement>event.target).value;
	}

}
