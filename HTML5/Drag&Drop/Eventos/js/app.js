$(document).ready(function(){

    //document.getElementById("img1").addEventListener("dragstart",manejoDragStart,false);

    //jquery le agrega a cada elemento img el eventListener dragstart
    $("img").bind("dragstart",manejoDragStart);

    //podemos bindear mas de un evento pasando una lista
    $("#zona_arrastrar").bind({"dragover":manejoDragOver,"drop":manejoDrop});
    
    function manejoDragStart(evento){
        $("#mensajes").html("Inicio del evento arrastrar: "+evento.target.id);
    }

    function manejoDragOver(evento){
    //como DragOver 'sobreescribe' a Drop debemos agregar algunos cambios
        evento.stopPropagation();
        evento.preventDefault();
        $("#mensajes").html("Manejo DragOver en: "+evento.target.id);
    }

    function manejoDrop(evento){
    //parece que drop y dragOver se pisan de alguna manera, deberia ahondar en ello
        evento.stopPropagation();
        evento.preventDefault();
        $("#mensajes").html("Manejo Drop en: "+evento.target.id);
    }
});