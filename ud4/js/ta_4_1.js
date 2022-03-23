"use strict";

var usuarios = [];
var divUsuarios = document.querySelector("#usuarios");

fetch("https://randomuser.me/api/")
  .then(function (results) {
    return results.json();
  })
  .then((users) => {
    usuarios = users.results;
    console.log(usuarios);
    usuarios.map(function (usuario) {
      let datosUsuario = document.createElement("h3");
      datosUsuario.innerHTML =
        "<img src =" + usuario.picture.medium + " /><br>" +
        "NOMBRE Y APELLIDO: " +
        usuario.name.first + " " + usuario.name.last + "<br>" +
        "EMAIL: " +
        usuario.email + "<br>" +
        "DIRECCIÓN: " +
        usuario.location.street.number + ", " + usuario.location.street.name + "<br>" +
        usuario.location.city + ", " + usuario.location.state +
        " (" + usuario.location.country + ")";
      divUsuarios.appendChild(datosUsuario);
    });
  });
