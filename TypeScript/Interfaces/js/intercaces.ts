/* Una interface es basicamente un contrato que debe respetar quien la implemente */

interface Usuario {
    nombreUsuario:string;
    password:string;
    confirmarPassword?:boolean;
}

let usuario1:Usuario = {
    nombreUsuario: "Pepe1",
    password: "sasa123"
}

let usuario2:Usuario = {
    nombreUsuario: "Pepe2",
    password: "sasa1234",
    confirmarPassword: true
}

console.log(usuario1);
console.log(usuario2);

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte: function(){
        console.log("Abordando el avión!");
    }
}

avion.abordarTransporte();