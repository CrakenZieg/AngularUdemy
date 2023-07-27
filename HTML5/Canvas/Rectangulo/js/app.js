$(document).ready(function(){
//jquery devuelve un arreglo de elementos
    let contexto = $("#canvas1")[0].getContext("2d"); //indicamos que trabajaremos en '2d'
    contexto.strokeStyle = "black"; //color de trazo
    contexto.strokeWidth = 10; //ancho del trazo
    contexto.strokeRect(10,10,200,100); //(x0,y0,ancho,alto)
    contexto.fillStyle = "grey"; //color del relleno
    contexto.fillRect(10,10,200,100); //area de relleno
});