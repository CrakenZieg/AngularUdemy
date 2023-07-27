$(document).ready(function(){
//jquery devuelve un arreglo de elementos
    let canvas = $("#canvas1")[0];
    let contexto = canvas.getContext("2d"); //indicamos que trabajaremos en '2d'
    let centroX = canvas.width /2; //mitad de ancho
    let centroy = canvas.height /2; //mitad de altura
    let radio = 60; //establecemos un radio

//beginPath() nos permite comenzar cualquier trazo, salvo el rectangulo que es nativo de canvas
    contexto.beginPath(); //iniciamos el dibujo
//el angulo siempre se mide en sentido del reloj, la orientacion corresponde al trazo!
    contexto.arc(centroX,centroy,radio,0,(0.5*Math.PI),true); //(x0,y0,radio,anguloInicial,anguloFinal,orientacion)
    contexto.lineWidth = 2; //ancho del trazo 
    contexto.strokeStyle = "red"; //color del trazo
    contexto.stroke(); //aplicamos el trazo
    contexto.fillStyle="grey"; //seteamos el relleno en gris
    contexto.fill(); //rellenamos

    contexto.beginPath();
    contexto.arc(30,30,20,Math.PI,(3/2)*Math.PI,false);
    contexto.strokeStyle = "black";
    contexto.stroke();
    contexto.fillStyle="black";
    contexto.fill();

});

//(3/2)