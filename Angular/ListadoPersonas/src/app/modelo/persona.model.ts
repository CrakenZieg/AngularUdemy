export class Persona{
  /*
  nombre:string;
  apellido:string;
  constructor(nombre:string, apellido:string){
    this.nombre = nombre;
    this.apellido = apellido;
  }
  */
//Sintaxis simplificada: le pasas los parametros y ya los toma como atributos de la clase
  constructor(public nombre:string, public apellido:string){}

  getNombreCompleto(){
    return `${this.nombre} ${this.apellido}`;
  }
}
