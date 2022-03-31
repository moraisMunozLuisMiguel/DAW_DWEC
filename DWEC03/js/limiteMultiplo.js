var botonEjecutar = document.getElementById("botonEjecutar");
var  numeros = document.getElementById("numeros");

botonEjecutar.addEventListener('click', function(){
   ejecutar();
});
function ejecutar(){
   let limite = parseInt(document.getElementById("limite").value);
   let multiplo = parseInt(document.getElementById("multiplo").value);
   try{
      if(limite <= 0 || multiplo <= 0){
         throw new Error ("El límite o el múltiplo debe ser mayor que 0");
      }else if(multiplo > limite){
         throw new Error("El múltiplo es mayor que el límite");
      }else{
         let divNumeros = document.getElementById("numeros");
         divNumeros.innerHTML="";
         divNumeros.innerHTML="<ul>"
         for(let i = 1; i <= limite; i++){
            if(i % multiplo === 0){
               divNumeros.innerHTML += "<li>" + i + "</li>";
            }
            divNumeros.innerHTML += "</ul>";
         }
      }   
   }catch (error){
      alert("ERROR");
   }

}
