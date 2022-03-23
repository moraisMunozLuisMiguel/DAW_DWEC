"use-strict";
$(document).ready(function(){
   var usuarios =$('#usuarios');
   $.get("https://randomuser.me/api/",function(response){
      //console.log(response);
      response.results.forEach(element =>{
         $(usuarios).append("<img src =" + element.picture.medium + " /><br>" +
        "NOMBRE Y APELLIDO: " +
        element.name.first + " " + element.name.last + "<br>" +
        "EMAIL: " +
        element.email + "<br>" +
        "DIRECCIÓN: " +
        element.location.street.number + ", " + element.location.street.name + "<br>" +
        element.location.city + ", " + element.location.state +
        " (" + element.location.country + ")");
      });
   });
});
