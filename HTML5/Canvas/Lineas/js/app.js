$(document).ready(function(){

    let canvas = $("#canvas1")[0];
    let contexto = canvas.getContext("2d"); 
    
    contexto.beginPath(); //comenzamos el trazo
    contexto.moveTo(15,15); //nos posicionamos en (15,15)
    contexto.lineTo(150,300); //trazamos hasta el punto
    contexto.stroke(); //marcamos

    contexto.lineTo(450,400); //trazamos hasta el punto   
    contexto.stroke(); //marcamos

    contexto.lineTo(500,200); //trazamos hasta el punto
    contexto.stroke(); //marcamos

    contexto.closePath(); //cerramos la figura
    contexto.stroke(); //marcamos

    contexto.fillStyle = "violet"; //seteamos el relleno en violet
    contexto.fill(); //rellenamos

    contexto.save(); //nos permite guardar las configuraciones previas

    contexto.fillStyle = "grey";
    contexto.strokeStyle = "red";
    contexto.lineWidth = 3;
    contexto.beginPath();
    contexto.moveTo(10,580);
    contexto.lineTo(148,302);
    contexto.lineTo(448,402);
    contexto.lineTo(590,590);
    contexto.closePath();
    contexto.stroke();
    contexto.fill();

    contexto.restore(); //recupera la configuracion al ultimo save()

    contexto.beginPath();
    contexto.moveTo(590,10);
    contexto.lineTo(50,15);
    contexto.lineTo(580,190);
    contexto.closePath();
    contexto.stroke();
    contexto.fill();

});
