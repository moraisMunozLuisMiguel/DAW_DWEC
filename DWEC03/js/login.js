var usuarios = new Array();

function addUsuariosArray () {
  //  Cargar el fichero JSON, parsearlo a objetos tipo "usuarios" y añadirlos al array
usuarios = JSON.parse( '[{"id" : 1, "nombre" : "Iker", "apellido" : "Arana", "usuario" : "iarana", "contraseña" : "1234Abcd"},{"id" : 2, "nombre" : "Andoni", "apellido" : "Larrieta", "usuario" : "alarrieta", "contraseña" : "5678Efgh"},{"id" : 3, "nombre" : "Jon", "apellido" : "Olano", "usuario" : "jolano", "contraseña" : "9012Ijkl"}]');
}

addUsuariosArray ();

function validar(){
	
	var usuarioIntroducido = document.getElementById("usuario").value;
	var passwordIntroducido = document.getElementById("password").value;
	var patronUsuario = /^(?:[a-z]|([._])(?!\1))+$/;
	var patronPassword = /^\d{4}[A-Z]{1}[a-z]{3}$/;
    
	if (!usuarioIntroducido.match(patronUsuario)) {
		document.getElementById("usuario").value = " ";
		document.getElementById("password").value = " ";
		alert("USUARIO Incorrecto");
		return false;
	}else if (!passwordIntroducido.match(patronPassword)){
		document.getElementById("usuario").value = " ";
		document.getElementById("password").value = " ";
		alert("PASSWORD Incorrecto");
		return false;
	}
		
	for (var i = 0; i < usuarios.length; i++) {
		if (usuarioIntroducido == usuarios[i].usuario && 
			passwordIntroducido == usuarios[i].contraseña){
			window.location = "juego.html"; 
			return false;
			break;
		}
	}	
	document.getElementById("usuario").value = " ";
	document.getElementById("password").value = " ";
	document.getElementById("usuarioNoRegistrado").innerHTML=
	"USUARIO NO Registrado";
}
	
	
