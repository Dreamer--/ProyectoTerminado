$(document).on("ready",main);

 
function main(){
	$("#bt-menu a").on("click", irA);
	$(window).scroll(scrollMenu);
}

function irA(){
	var seccion = $(this).attr("href");
	$("body, html").animate({
		scrollTop: $(seccion).offset().top-130
	},800);

	return false;
}

function scrollMenu(){
	var secciones = [$("#slider").offset().top, $("#info").offset().top, $("#juegos").offset().top,$("#imagenes").offset().top,$("#videos").offset().top,$("#contacto").offset().top, $("body").height()];

	if($(this).scrollTop() > secciones[0]-190 && $(this).scrollTop() < secciones[1]-190){
		$("#bt-menu a").eq(1).addClass("seleccionado");
	}
	else{
		$("#bt-menu a").eq(1).removeClass("seleccionado");
		
	}


	if($(this).scrollTop() > secciones[1]-190 && $(this).scrollTop() < secciones[2]-190){
		$("#bt-menu a").eq(2).addClass("seleccionado");
	}
	else{
		$("#bt-menu a").eq(2).removeClass("seleccionado");
		
	}

	if($(this).scrollTop() > secciones[2]-190 && $(this).scrollTop() < secciones[3]-190){
		$("#bt-menu a").eq(3).addClass("seleccionado");
	}
	else{
		$("#bt-menu a").eq(3).removeClass("seleccionado");
		
	}

	if($(this).scrollTop() > secciones[3]-190 && $(this).scrollTop() < secciones[4]-190){
		$("#bt-menu a").eq(4).addClass("seleccionado");
	}
	else{
		$("#bt-menu a").eq(4).removeClass("seleccionado");
		
	}
	if($(this).scrollTop() > secciones[4]-190 && $(this).scrollTop() < secciones[5]-190){
		$("#bt-menu a").eq(5).addClass("seleccionado");
	}
	else{
		$("#bt-menu a").eq(5).removeClass("seleccionado");
		
	}
	if($(this).scrollTop() > secciones[5]-190 && $(this).scrollTop() < secciones[6]-190){
		$("#bt-menu a").eq(6).addClass("seleccionado");
	}
	else{
		$("#bt-menu a").eq(6).removeClass("seleccionado");
		
	}

}


    function validar(){

    		var asunto=document.getElementById("txtasunto").value;
        var asuntoRegExp = /^[a-zA-Z]*$/;
        if(!asunto){
           
            alert('El campo viene vacio');
        }else{
           
            if(asunto.match(asuntoRegExp)){

                alert('Asunto guardado correctamente');
            }else{
                alert('El nombre no es valido');
            }
 
        }


    		var correo=document.getElementById("txtcorreo").value; 
        var emailRegExp = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        if(!correo){
           
            alert('el campo viene vacio');
        }else{
         
            if(correo.match(emailRegExp)){
            	
                alert('Correo guardado correctamente');
            }else{
                alert('El correo no es valido');
            }
 
        }
    		var nombre=document.getElementById("txtnombre").value; 
        var nombreRegExp = /^[a-zA-Z]*$/;
        if(!nombre){
            
            alert('El campo viene vacio');
        }else{
           
            if(nombre.match(nombreRegExp)){

            	 
                alert('Nombre guardado correctamente');
            }else{
                alert('El nombre no es valido');
            }
 
        }


    	var mensaje=document.getElementById("textA").value; 
        var areaRegExp = /^[a-zA-Z]*$/;
        if(!mensaje){
           
            alert('El campo viene vacio');
        }else{
           
            if(mensaje.match(areaRegExp)){

            	 
                alert('Mensaje guardado correctamente');
            }else{
                alert('El nombre no es valido');
            }
 
        }



    }


    function redireccionar() {
setTimeout("location.href='#popUp'", 1000);


}


