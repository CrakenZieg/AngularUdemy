/* En TypeScript solo es necesario declarar el tipo de variable cuando no la inicializamos
    si la inicializamos podemos no declarar el tipo*/
var saludo = "Hola mundo!";
var numero;
numero = 10;
var cualquiera;
cualquiera = "cualquiera";
cualquiera = 15;
function saludar() {
    console.log(saludo);
    console.log(numero);
    console.log(cualquiera);
}
saludar();
