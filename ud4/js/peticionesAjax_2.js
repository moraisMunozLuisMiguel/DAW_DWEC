'use strict';
console.log("Peticiones AJAX");
var usuarios = [];
var divUsuarios = document.querySelector('#usuarios');

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(data){
   // Convertir datos a JSON
   return data.json();
})
.then(users => {
   // Guardar los datos de los usuarios en una variable
   usuarios = users;
   console.log(usuarios);
   // Mostrar usuarios por pantalla
   usuarios.map(function(user,i){
      let nombre = document.createElement('h3');
      nombre.innerHTML = i + " - " + user.name + " - " + user.username;
      divUsuarios.appendChild(nombre);
   });
})
