let x = 10;
let direccion;
let imagen;
let canvas;
let contexto;

$(document).ready(function(){
    
    canvas = $("#canvas1")[0];
    contexto = canvas.getContext("2d");

    animar();

});

function animar(){

    imagen = new Image();

    imagen.onload = function(){
        contexto.clearRect(0,0,canvas.width,canvas.height); //limpiamos el canvas
        contexto.drawImage(imagen,x,0);
        actualizarDibujo();
        setInterval(animar(),100);
    };

    imagen.src = "images/duke.png";
}

function actualizarDibujo(){
    definirDireccion();
    if(direccion){
        x++;
    } else {
        x--;
    }
}

function definirDireccion(){
    if(x==(canvas.width-imagen.width)){
        direccion = false;
    } else if(x==1){
        direccion = true;
    }
};

