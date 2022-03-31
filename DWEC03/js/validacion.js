window.onload=iniciar;

function iniciar(){
   document.getElementById("enviar").addEventListener('click',validar,false);
}

function validar(){
   var patronTelefono= /^\d{9}$/;
   var patronMatricula=/^\d{4} [A-Z]{3}$/;
   if (!patronTelefono.test(document.getElementById("telefono").value)){
      alert("Error: campo telefono incorrecto");
   }

   if(!patronMatricula.test(document.getElementById("matricula").value)){
      alert("Error: campo matricula incorrecta");
   }

   if(confirm("¿Desea enviar el formulario?")){
      document.getElementById("formulario").submit();
   }else{
      alert("SALIR");
   }
      
}