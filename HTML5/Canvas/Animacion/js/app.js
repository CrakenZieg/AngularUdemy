let x = 10, y = 50, ancho = 50;
let direccion;
let canvas;
let contexto;

let gradiente; 

$(document).ready(function(){
    
    canvas = $("#canvas1")[0];
    contexto = canvas.getContext("2d");

    animar();
   
    //gradiente:
    gradiente = contexto.createLinearGradient(0,0,canvas.width,0);
    gradiente.addColorStop("0","black"); 
    gradiente.addColorStop("0.1","grey");
    gradiente.addColorStop("0.2","orange");
    gradiente.addColorStop("0.3","red");
    gradiente.addColorStop("0.4","orange");
    gradiente.addColorStop("0.5","grey");
    gradiente.addColorStop("0.6","black");
    gradiente.addColorStop("0.7","grey");
    gradiente.addColorStop("0.8","orange");
    gradiente.addColorStop("0.9","red");
    gradiente.addColorStop("1","orange");

});

function animar(){

    contexto.clearRect(0,0,canvas.width,canvas.height); //limpiamos el canvas
    
    contexto.strokeStyle = "black";
    contexto.fillStyle = gradiente;

    contexto.lineWidth = 2;
    contexto.fillRect(x,y,ancho,ancho);
    contexto.strokeRect(x,y,ancho,ancho);

    actualizarDibujo();
    
    setTimeout("animar()",1);
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
    if(x==(canvas.width-ancho)){
        direccion = false;
    } else if(x==1){
        direccion = true;
    }
};

