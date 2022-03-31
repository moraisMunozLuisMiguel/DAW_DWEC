var botonCrearTabla= document.getElementById('botonCrearTabla');
botonCrearTabla.addEventListener("click", crearTabla, false);

function esParYDivisibleEntreTres(n){
   //var par = false
      if(n % 2 == 0  &&  n%3 == 0){
         return true;
    }else{
       return false;
    }
}

function crearTabla(){
   var tabla = document.createElement("TABLE");
   var numeroUnico = 1;
   for (var i = 0; i < 10; i++){
      var fila = document.createElement("TR");
      for(var j = 0; j < 10; j++){
         var celda = document.createElement("TD");
         var texto = document.createTextNode(numeroUnico);
         celda.appendChild(texto);
         fila.appendChild(celda);
         if(esParYDivisibleEntreTres(numeroUnico)){
            celda.style.backgroundColor="Yellow";
         }
         numeroUnico++;
      }
      tabla.appendChild(fila);
   }
   document.body.appendChild(tabla);
}