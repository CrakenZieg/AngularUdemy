$(document).ready(function(){

    let canvas = $("#canvas1")[0];
    let contexto = canvas.getContext("2d"); 
    
    let texto = "Hola canvas!"; //texto
    contexto.font = '50pt Franklin Gothic Medium'; //fuente
    contexto.fillStyle = "red"; //color del relleno
    contexto.strokeStyle = "black"; //color del borde
    contexto.fillText(texto, 148, 200); //marcamos el relleno
    contexto.strokeText(texto, 150, 200); //marcamos el borde

    //gradiente:
    let gradiente = contexto.createLinearGradient(0,0,canvas.width,0); //(x0,y0,x1,y1) => direccion del gradiente
    gradiente.addColorStop("0","magenta"); //primera franja de color, en 0 hay magenta puro
    gradiente.addColorStop("0.5","blue"); //en 0.5 del recorrido del grandiente hay azul puro  
    gradiente.addColorStop("1","red"); //tercera franja, en 1 (al final del grandiente) hay rojo puro
    contexto.font = '50pt Verdana'; //establecemos la fuente
    contexto.fillStyle = gradiente; //usamos el gradiente como relleno
    contexto.fillText("Gradiente!", 148, 400); //marcamos el relleno
    contexto.strokeText("Gradiente!", 150, 400); //marcamos el borde

});
