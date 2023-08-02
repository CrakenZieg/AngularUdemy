import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-persona',
	templateUrl: './persona.component.html',
	styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
	private nombre: string = 'Peludo';
	private apellido: string = 'Mau';
	private edad: number = 33;

	constructor() {}

	ngOnInit() {}

	getNombre(): string {
		return this.nombre;
	}
	getApellido(): string {
		return this.apellido;
	}
	getEdad(): number {
		return this.edad;
	}
}
