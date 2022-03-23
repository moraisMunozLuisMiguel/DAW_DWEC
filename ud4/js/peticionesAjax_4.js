'use strict';
// ENCADENAR PROMESAS
console.log("Peticiones AJAX");
var usuarios = [];
var divUsuarios = document.querySelector('#usuarios');
var divUsuario = document.querySelector('#usuario');
var numUsuario = 2;

realizarPeticionTodosUsuarios()
   .then(data => data.json())
   .then(users => {
   // Guardar los datos de los usuarios en una variable
   pintarUsuarios(users.data);
   return realizarPeticionUsuario(numUsuario);
   })
   .then(datosUsuario => datosUsuario.json())
   .then(usuario =>{
      pintarUsuario(usuario.data);
   })

function realizarPeticionTodosUsuarios(){
   // Realizar la petición
   return fetch('https://reqres.in/api/users');
   
}
function realizarPeticionUsuario(numUsuario){
   // Realizar la petición
   return fetch('https://reqres.in/api/users/' + numUsuario.toString());
}

function pintarUsuarios(usuarios){
	// Mostrar usuarios por pantalla con función map
   usuarios.map(function(user,i){
      let nombre = document.createElement('h3');
	  nombre.innerHTML = i + " - " + user.first_name + "  " + user.last_name;
      divUsuarios.appendChild(nombre);
   });
}

function pintarUsuario(usuario){
   let nombre = document.createElement('h4');
	  nombre.innerHTML = usuario.first_name + "  " + usuario.last_name;
      divUsuario.appendChild(nombre);
}

// CAPTURAR ERRORES
peticionErronea()
.then(data => data.json())
.catch(error => {
   alert("Servicio caído")
})

function peticionErronea(){
   return fetch('https://dmc.com');
}