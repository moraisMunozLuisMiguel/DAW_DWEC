'use strict';
console.log("Peticiones AJAX");
var usuarios = [];
fetch('https://jsonplaceholder.typicode.com/users')
.then(data => data.json())
// Función de callback
.then(data =>{
   usuarios = data;
   console.log(usuarios);
})
