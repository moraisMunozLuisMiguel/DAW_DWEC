'use-strict'

// Peticiones AJAX en jQuery
$(document).ready(function(){
   console.log("Ficheros cargados correctamente");

   // Cargar AJAX
   var datos = $("#datos");
 
   // Método GET
   $.get("https://reqres.in/api/users",{page:2},function(response){
      // console.log(response);
      response.data.forEach(element =>{
         $(datos).append("<p>"+element.first_name + " " + element.last_name + "<p>");
      });
   });

   // Método POST
   var usuario = {
      "nombre" : "Iker",
      "apellido": "Arana"
   };

   $.post("https://reqres.in/api/users",usuario,function(response){
      console.log(response);
   }).done(function(){
      alert("Usuario añadido satisfactoriamente");
   });

});