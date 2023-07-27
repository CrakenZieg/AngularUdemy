$(document).ready(function(){

    //document.getElementById("img1").addEventListener("dragstart",manejoDragStart,false);

    $("img").bind("dragstart",manejoDragStart);
    
    function manejoDragStart(evento){
        $("#mensajes").html("Inicio del evento arrastrar: "+evento.target.id);
    }



});