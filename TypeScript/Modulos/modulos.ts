import { Persona } from "./persona";

/* Mediante las palabras reservadas export e import podemos conectar archivos de Ts */

let persona1 = new Persona("Pepe","Papo");

console.log(persona1);
console.log(persona1.nombre+" "+persona1.apellido);

/* 
    Para correr el index debemos usar un servidor que resuelva los modulos, usaremos Webpack 
    usando el comando en consola 'npm install webpack webpack-cli webpack-dev-server'
    tambien bajando a nuetro ambiente de trabajo el TypeScript loader usando 
    'npm install typescript ts-loader --save-dev'
    
*/