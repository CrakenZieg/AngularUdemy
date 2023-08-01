"use strict";
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    static metodoEstatico() {
        return 4;
    }
}
let persona1 = new Persona("Roberto", "Carlo");
console.log(persona1.getNombre() + " " + persona1.getApellido());
console.log(Persona.metodoEstatico());
