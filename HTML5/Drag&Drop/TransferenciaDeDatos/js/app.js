$(document).ready(function(){

    //document.getElementById("img1").addEventListener("dragstart",manejoDragStart,false);

    //jquery le agrega a cada elemento img el eventListener dragstart
    $("img").bind("dragstart",manejoDragStart);

    //podemos bindear mas de un evento pasando una lista
    $("#zona_arrastrar").bind({"dragover":manejoDragOver,"drop":manejoDrop});
    
//en jquery el obj dataTransfer no se propaga dentro de los eventos ejecutados
//por ello agregamos la propiedad de 'dataTransfer' para que si lo haga
//para poder recuperar las imagenes
    //jQuery.event.props.push('dataTransfer');

    function manejoDragStart(evento){
        $("#mensajes").html("Inicio del evento arrastrar: "+evento.target.id);
    //agregamos como parte del evento el id de la imagen arrastrada
        evento.originalEvent.dataTransfer.setData("text/html",this.id);
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
    //recuperamos el id con getData()
        let idImgSel = evento.originalEvent.dataTransfer.getData("text/html");
    //lo agregamos a elementos
        $("#elementos").append(idImgSel+" ");
        //evento.target.appendChild(document.getElementById(idImgSel));
        $("#elementos").append(document.getElementById(idImgSel));
    }
});