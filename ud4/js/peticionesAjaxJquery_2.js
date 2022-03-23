'use-strict'

// Peticiones AJAX en jQuery
$(document).ready(function(){
   console.log("Ficheros cargados correctamente");

   // Cargar AJAX
   // Load https://regres.in/
   var datos = $("#datos");
 
   // Método GET
   $.get("https://reqres.in/api/users",{page:2},function(response){
      // console.log(response);
      response.data.forEach(element =>{
         $(datos).append("<p>"+element.first_name + " " + element.last_name + "<p>");
      });
   });

   // Otra forma de hacer peticiones AJAX
   var usuario = {
      "nombre" : "Iker",
      "apellido": "Arana"
   };
   
   $.ajax({
      type:'POST',
      url:'https://reqres.in/api/users',
      data:usuario,
      beforeSend: function(){
         console.log("Enviando usuario...");
      },
      success: function(response){
         console.log("Usuario adjuntado");
         console.log(response);
      },
      error: function(){
         console.log("Error");
      },
      timeout: 1000 //ms
   });

});