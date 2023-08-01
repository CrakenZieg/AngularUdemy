class Persona {
    private nombre: string;
    private apellido: string;
    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    static metodoEstatico(){
        return 4;
    }
}

let persona1 = new Persona("Roberto", "Carlo");
console.log(persona1.getNombre() + " " + persona1.getApellido());
console.log(Persona.metodoEstatico());
