var boton = document.getElementById("boton");
boton.addEventListener('click', function(){
   validar();
});

function validar(){
       valor = document.getElementById("nombre").value;
       if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
           document.getElementById("Adnombre").innerHTML = "*Introduzca un nombre*";
       }else{
           document.getElementById("Adnombre").innerHTML = "*Esta correcto*";
       }

       valor = document.getElementById("apellido").value;
       if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
           document.getElementById("Adapellido").innerHTML = "*Introduzca un apellido*";
       }else{
           document.getElementById("Adapellido").innerHTML = "*Esta correcto*";
       }

       valor = document.getElementById("email").value;
       if( /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor) ) {
           document.getElementById("Ademail").innerHTML = "*Esta correcto*";
       }else{
           document.getElementById("Ademail").innerHTML = "*Introduzca un email correcto*";
       }

       valor = document.getElementById("tel").value;
       if( !(/^\d{9}$/.test(valor)) ) {
           document.getElementById("Adtel").innerHTML = "*Introduzca un número de teléfono correcto*";
       }else{
           document.getElementById("Adtel").innerHTML = "*Esta correcto*";
       }
      }