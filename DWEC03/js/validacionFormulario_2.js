window.onload=iniciar;

function iniciar(){
	borrarCookie("visita");
	document.getElementById("enviar").addEventListener('click',validar,false);
	document.getElementById("nombre").addEventListener('blur',convertirMayusculas,false);
	document.getElementById("apellidos").addEventListener('blur',convertirMayusculas,false);
}

function validar(eventopordefecto){
	var valor=parseInt(leerCookie("visita"))+1;
	crearCookie("visita",valor,30);
	document.getElementById("intentos").innerHTML="Intentos de envío del formulario: "+valor;
	if (validarcampostexto(this) &&	validarEdad() && validarNif() && validarEmail() && validarProvincia() && validarFecha() && validarTelefono() && validarHora() && confirm("¿Deseas enviar el formulario?"))
		return true;
	else{
		eventopordefecto.preventDefault();		
		return false;	
	}
}

function validarcampostexto(objeto){
	var formulario = objeto.form;	
	for (var i=0; i<formulario.elements.length; i++){
		formulario.elements[i].className="";
		if (formulario.elements[i].type == "text" && formulario.elements[i].value==""){
			formulario.elements[i].className="error";
			formulario.elements[i].focus();
			document.getElementById("errores").innerHTML="ERROR: "+formulario.elements[i].name.toUpperCase()+" no puede estar vacío";
			return false;
		}
	}
	return true;	 
}

function convertirMayusculas(){
	document.getElementById("nombre").value=document.getElementById("nombre").value.toUpperCase();
	document.getElementById("apellidos").value=document.getElementById("apellidos").value.toUpperCase();
}

function validarEdad(){
	if (isNaN(document.getElementById("edad").value) || document.getElementById("edad").value <0 || document.getElementById("edad").value >105){
			document.getElementById("errores").innerHTML="ERROR: La edad debe estar entre 0 y 105";
			document.getElementById("edad").className="error";
			document.getElementById("edad").focus();
			return false;
	}
	document.getElementById("edad").className="";
	return true;
}

function validarTelefono(){
	var patron=/^[69]\d{8}$/;
	if(!patron.test(document.getElementById("telefono").value)){
		document.getElementById("errores").innerHTML="ERROR: Sólo teléfonos que comiencen por 6 ó 9";
		document.getElementById("telefono").className="error";
		document.getElementById("telefono").focus();
		return false;
	}
	document.getElementById("telefono").className="";
	return true;
}

function validarEmail(){
	var patron = /^[\w-\.]{2,}@([\w-]{2,}\.)+([\w-]{2,4})$/;
	if (!patron.test(document.getElementById("email").value)){
		document.getElementById("errores").innerHTML="ERROR: No es un email válido.";
		document.getElementById("email").focus();
		document.getElementById("email").className="error";	
		return false;
	}
	document.getElementById("email").className="";	
	return true;
}

function validarNif(){
	var patron = /^\d{8}-[A-Z]$/;
	if (!patron.test(document.getElementById("nif").value)){
		document.getElementById("errores").innerHTML="ERROR: No es un número de NIF válido.";
		document.getElementById("nif").focus();
		document.getElementById("nif").className="error";	
		return false;
	}
	document.getElementById("nif").className="";	
	return true;
}

function validarProvincia(){
	if (document.getElementById("provincia").selectedIndex==0){
		document.getElementById("errores").innerHTML="ERROR: No ha seleccionado ninguna provincia.";
		document.getElementById("provincia").focus();
		document.getElementById("provincia").className="error";	
		return false;
	}
	return true;
}

function validarFecha(){
	var patron=/^((0?[1-9])|(1\d)|(2\d)|(3[0-1]))[-|\/]((0?[1-9])|(1[0-2]))[-|\/]([1-2]\d{3})$/
	if (!patron.test(document.getElementById("fecha").value)){
		document.getElementById("errores").innerHTML="Fecha errónea. Introdúzcala de nuevo (dd/mm/aaaa)";
		document.getElementById("fecha").focus();
		document.getElementById("fecha").className="error";	
		return false;
	}
	return true;
}

function validarHora(){
	var patron=/^(0?[1-9]|1\d|2[0-3]):([0-5]?\d)$/;
	if (!patron.test(document.getElementById("hora").value)){
		document.getElementById("errores").innerHTML="Hora errónea. Introdúzcala de nuevo (hh:mm)";
		document.getElementById("hora").focus();
		document.getElementById("hora").className="error";	
		return false;
	}
	return true;
}

  function crearCookie(nombre,valor,dias) {
    if (dias){
      var date = new Date();
      date.setTime(date.getTime()+(dias*24*60*60*1000));
      var expirar = "; expires="+date.toGMTString();
    }else{
			var expirar = "";
    }
    document.cookie = nombre+"="+valor+expirar+"; path=/";
  }

  function leerCookie(nombre) {
    var miNombre = nombre + "=";
    var cadena = document.cookie.split(';');
    for(var i=0;i < cadena.length;i++) {
      var c = cadena[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(miNombre) == 0)
				return c.substring(miNombre.length,c.length);
    }
    return 0;
  }

  function borrarCookie(nombre) {
    crearCookie(nombre,"",-1);
  }
