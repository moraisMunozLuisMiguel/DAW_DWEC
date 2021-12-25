'use-strict'
$(document).ready(function(){
	// Eventos click y doble click
	var parrafo =$("#parrafo");
	parrafo.click(function(){
		$(this).css("background","yellow");
	});
	parrafo.dblclick(function(){
		$(this).css("background","white") .css("color","blue");
	});
	
	// Eventos ratón
	
	var parrafo2 =$("#parrafo2");
	
	// MouseOver
	/*parrafo2.mouseover(function(){
		$(this).css("background","green");
	});*/
	
	// MouseOut
	/*parrafo2.mouseout(function(){
		$(this).css("background","white");
	});*/
	
	// Evento hover
	parrafo2.hover(cambiarVerde,cambiarBlanco);
	function cambiarVerde(){
		$(this).css("background","green");
	}
	function cambiarBlanco(){
		$(this).css("background","white");
	}
	
	// Evento Focus y blur
	var nombre=$("#nombre");
	
	nombre.focus(function(){
		$(this).css("border","5px solid green");
	});
	
	nombre.blur(function(){
		let valor =$(this).val();
		alert(valor);
	});

});