"use strict";
let suma = function (a, b) {
    return a + b;
};
console.log("5 + 3 = " + suma(5, 3));
let sumaFlecha = (a, b) => {
    return a + b;
};
console.log("5 + 3 = " + sumaFlecha(5, 3));
let nombre = function () {
    return "Pepe";
};
let nombreFlecha = () => "Solo una linea";
