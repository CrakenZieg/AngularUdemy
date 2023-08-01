/* En TypeScript solo es necesario declarar el tipo de variable cuando no la inicializamos 
    si la inicializamos podemos no declarar el tipo*/
let saludo:string = "Hola mundo!";

let numero:number;
numero = 10;

let cualquiera:any;

cualquiera="cualquiera";
cualquiera = 15;

function saludar(){
    console.log(saludo);
    console.log(numero);
    console.log(cualquiera);
}

saludar();