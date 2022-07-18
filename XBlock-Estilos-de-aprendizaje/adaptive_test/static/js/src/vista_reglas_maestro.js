/* Javascript for ReglasXBlock. */
function ReglasMaestro(runtime, element) {

    var handlerUrl = runtime.handlerUrl(element, 'tag_resource');

    $('#send', element).click(function(eventObject) {

        var file = document.getElementById("myfile").value

        var selector1 = document.getElementById("selector1")


        var tag = "" 
        
        for(var i=0; i< selector1.length;i++){

            if (selector1[i].selected===true){
                //var tag = tag + selector1[i].value + "-"
                var tag = selector1[i].value;
                console.log('btn clicked',tag);
            }
        }

        $.ajax({
            type: "POST",
            url: handlerUrl,
            data: JSON.stringify({
                "tag": tag,
                "resource":file
        }),
            success: function(data){
                var showInfoResource = document.getElementById('info-resource')
                showInfoResource.innerHTML = ''                
                //showInfoResource.innerHTML =JSON.stringify(data.tag)
                showInfoResource.innerHTML ='<br><b>Recurso subido exitosamente</b>'

            }
        });
    });
    $(function ($) {
        /* Here's where you'd do things on page load. */
    });
}

function agregarcontenido(a){
    tipoagregacion = a;
    var btn = document.getElementById("send")
    btn.removeAttribute("disabled")
    document.getElementById("tipo_contenido").innerHTML = "<h6 class='card-title mb-0' > Adjunta y sube el recurso </h6>";
    if(tipoagregacion=="pdf"){
        codigo=''+        
    '<form class="d-flex mt-3 flex-wrap" id="estilo_aprendizaje" action=">'+
        '<label class="formFile mt-3 mb-1" for="myfile"> Adjunta un recurso en formato PDF: </label>'+
        '<input class="form-control mb-3" type="file" id="myfile" name="myfile">'+
                    
        '<div class="card me-3">'+
            '<div class="card-header text-white bg-primary">'+
                '<b class="m-0">Cohorte recomendada: Visual</b>'+
            '</div>'+
            '<div class="card-body border border-primary">'+
                '<select class="form-select" name="select_aprendizaje" id="selector1" >'+
                    '<option value="Visual" selected>Cohorte Visual</option>'+
                    '<option value="Auditivo">Cohorte Auditivo</option>'+
                    '<option value="Kinestetico">Cohorte Kinestetico</option>'+                    
                '</select>'+
            '</div>'+
        '</div>'+        
                       
        '</form>'+
        '<p class="bd-callout bd-callout-warning mt-4 mb-1" id="nota-importante"><span>Nota:</span> Recuerda que debes escoger una cohorte.</p>';
        
        //console.log(codigo)
        document.getElementById("agregarcontenido").innerHTML = codigo;
    }
    if(tipoagregacion=="video"){
        codigo=''+        
    '<form class="d-flex mt-3 flex-wrap" id="estilo_aprendizaje" action=">'+
        '<label class="formFile mt-3 mb-1" for="myfile"> Adjunta un recurso en formato video: </label>'+
        '<input class="form-control mb-3" type="file" id="myfile" name="myfile">'+
                    
        '<div class="card me-3">'+
            '<div class="card-header text-white bg-primary">'+
                '<b class="m-0">Cohorte recomendada: Kinestética</b>'+
            '</div>'+
            '<div class="card-body border border-primary">'+
                '<select class="form-select" name="select_aprendizaje" id="selector1" >'+
                    '<option value="Visual">Cohorte Visual</option>'+
                    '<option value="Auditivo">Cohorte Auditivo</option>'+
                    '<option value="Kinestetico" selected>Cohorte Kinestetico</option>'+                    
                '</select>'+
            '</div>'+
        '</div>'+        
                       
        '</form>'+
        '<p class="bd-callout bd-callout-warning mt-4 mb-1" id="nota-importante"><span>Nota:</span> Recuerda que debes escoger una cohorte.</p>';
        
        //console.log(codigo)
        document.getElementById("agregarcontenido").innerHTML = codigo;
    }
    if(tipoagregacion=="audio"){
        codigo=''+        
    '<form class="d-flex mt-3 flex-wrap" id="estilo_aprendizaje" action=">'+
        '<label class="formFile mt-3 mb-1" for="myfile"> Adjunta un recurso en formato audio: </label>'+
        '<input class="form-control mb-3" type="file" id="myfile" name="myfile">'+
                    
        '<div class="card me-3">'+
            '<div class="card-header text-white bg-primary">'+
                '<b class="m-0">Cohorte recomendada: Auditiva</b>'+
            '</div>'+
            '<div class="card-body border border-primary">'+
                '<select class="form-select" name="select_aprendizaje" id="selector1" >'+
                    '<option value="Visual" >Cohorte Visual</option>'+
                    '<option value="Auditivo" selected>Cohorte Auditivo</option>'+
                    '<option value="Kinestetico">Cohorte Kinestetico</option>'+                    
                '</select>'+
            '</div>'+
        '</div>'+        
                       
        '</form>'+
        '<p class="bd-callout bd-callout-warning mt-4 mb-1" id="nota-importante"><span>Nota:</span> Recuerda que debes escoger una cohorte.</p>';
        
        //console.log(codigo)
        document.getElementById("agregarcontenido").innerHTML = codigo;
    }
    if(tipoagregacion=="imagen"){
        codigo=''+        
    '<form class="d-flex mt-3 flex-wrap" id="estilo_aprendizaje" action=">'+
        '<label class="formFile mt-3 mb-1" for="myfile"> Adjunta un recurso en formato imagen: </label>'+
        '<input class="form-control mb-3" type="file" id="myfile" name="myfile">'+
                    
        '<div class="card me-3">'+
            '<div class="card-header text-white bg-primary">'+
                '<b class="m-0">Cohorte recomendada: Visual</b>'+
            '</div>'+
            '<div class="card-body border border-primary">'+
                '<select class="form-select" name="select_aprendizaje" id="selector1" >'+
                    '<option value="Visual" selected>Cohorte Visual</option>'+
                    '<option value="Auditivo">Cohorte Auditivo</option>'+
                    '<option value="Kinestetico">Cohorte Kinestetico</option>'+                    
                '</select>'+
            '</div>'+
        '</div>'+        
                       
        '</form>'+
        '<p class="bd-callout bd-callout-warning mt-4 mb-1" id="nota-importante"><span>Nota:</span> Recuerda que debes escoger una cohorte.</p>';
        
        //console.log(codigo)
        document.getElementById("agregarcontenido").innerHTML = codigo;
    }
    if(tipoagregacion=="url"){
        codigo=''+        
    '<form class="d-flex mt-3 flex-wrap" id="estilo_aprendizaje" action=">'+
        '<label class="formFile mt-3 mb-1" for="myfile"> Adjunta una URL: </label>'+
        //'<input class="form-control mb-3" type="file" id="myfile" name="myfile">'+
        '<input class="form-control mb-3" type="url" onKeyPress="if(event.keyCode == 13) event.returnValue = false;" name="myfile" id="myfile" placeholder="https://example.com"  pattern="https://.*" size="30" required></input>'+
          
        '<div class="card me-3">'+
            '<div class="card-header text-white bg-primary">'+
                '<b class="m-0">Cohorte recomendada: Visual</b>'+
            '</div>'+
            '<div class="card-body border border-primary">'+
                '<select class="form-select" name="select_aprendizaje" id="selector1" >'+
                    '<option value="Visual">Cohorte Visual</option>'+
                    '<option value="Auditivo">Cohorte Auditivo</option>'+
                    '<option value="Kinestetico" selected>Cohorte Kinestetico</option>'+                    
                '</select>'+
            '</div>'+
        '</div>'+        
                       
        '</form>'+
        '<p class="bd-callout bd-callout-warning mt-4 mb-1" id="nota-importante"><span>Nota:</span> Recuerda que debes escoger una cohorte.</p>';
        
        //console.log(codigo)
        document.getElementById("agregarcontenido").innerHTML = codigo;
    }


}

document.getElementById("btnVistaEstudiante").addEventListener("click",function(){
    window.location.href="/scenario/adaptive_test.0/vista_reglas_estudiante/"+window.location.search;
});