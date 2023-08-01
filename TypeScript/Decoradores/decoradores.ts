function Saludar(target:Function):void{
    target.prototype.saludos = function():void{
        console.log("Hola desde decoradores");
    }
}

/* En Ts me marca error, dice: 
        'Unable to resolve signature of class decorator when called as an expression.
        The runtime will invoke the decorator with 2 arguments, but the decorator expects 1.'
   Pero compila bien en Js
*/

@Saludar
class Hola{
    constructor(){}
}

let hola1 = new Hola();
hola1.saludos();