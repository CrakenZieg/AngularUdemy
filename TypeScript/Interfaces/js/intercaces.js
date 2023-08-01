"use strict";
/* Una interface es basicamente un contrato que debe respetar quien la implemente */
let usuario1 = {
    nombreUsuario: "Pepe1",
    password: "sasa123"
};
let usuario2 = {
    nombreUsuario: "Pepe2",
    password: "sasa1234",
    confirmarPassword: true
};
console.log(usuario1);
console.log(usuario2);
let avion = {
    abordarTransporte: function () {
        console.log("Abordando el avión!");
    }
};
avion.abordarTransporte();
