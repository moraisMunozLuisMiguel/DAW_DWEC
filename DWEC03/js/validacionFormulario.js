window.onload=iniciar;

function iniciar(){
	document.getElementById("enviar").addEventListener('click',validar,false);
}

function validar(eventopordefecto){							
	if (validarcampostexto(this) && validarMatricula() && validarProvincia() && confirm("¿Deseas enviar el formulario?"))
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
	}
	for (var i=0; i<formulario.elements.length; i++)	{
		if (formulario.elements[i].type == "text" && formulario.elements[i].value==""){
			alert("El campo: "+formulario.elements[i].name+" no puede estar en blanco");
			formulario.elements[i].className="error";
			formulario.elements[i].focus();
			return false;
		}
		else if (formulario.elements[i].id=="edad"){
				if (isNaN(formulario.elements[i].value) || formulario.elements[i].value <0 || formulario.elements[i].value >105){
					alert("El campo: "+formulario.elements[i].name+" posee valores incorrectos o la edad <0 o >105");
					formulario.elements[i].className="error";
					formulario.elements[i].focus();
					return false;
				}
			}
	}
	return true;	 
}

function validarMatricula(){
	var patron = /^\d{4}\s?[A-Z]{3}$/;	
	if (patron.test(document.getElementById("matricula").value)){
		document.getElementById("matricula").className="";	
		return true;
	}
	else{
		alert("El campo: Matricula no está correcto.\n\nCuatro números espacion en blanco opcional y 3 letras mayúsculas.");
		document.getElementById("matricula").focus();
		document.getElementById("matricula").className="error";	
		return false;
	}
}

function validarProvincia(){
	if (document.getElementById("provincia").selectedIndex==0){
		alert("Atención!: Debes seleccionar una provincia.");
		document.getElementById("provincia").focus();
		document.getElementById("provincia").className="error";	
		return false;
	}
	else
		return true;
}