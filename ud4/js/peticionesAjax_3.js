'use strict';
// ENCADENAR PROMESAS
console.log("Peticiones AJAX");
var usuarios = [];
var divUsuarios = document.querySelector('#usuarios');

realizarPeticionTodosUsuarios()
   .then(data => data.json())
   .then(users => {
   // Guardar los datos de los usuarios en una variable
   pintarUsuarios(users.data);
   })

function realizarPeticionTodosUsuarios(){
   // Realizar la petición
   return fetch('https://reqres.in/api/users');
}

function pintarUsuarios(usuarios){
	// Mostrar usuarios por pantalla con función map
   usuarios.map(function(user,i){
      let nombre = document.createElement('h3');
      nombre.innerHTML = i + " - " + user.first_name + "  " + user.last_name;
      divUsuarios.appendChild(nombre);
   });
}
