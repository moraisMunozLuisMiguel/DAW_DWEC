var texto = document.getElementById('texto');
var botonComprobar = document.getElementById('botonComprobar');
botonComprobar.addEventListener("click", posicionLetra, false);

function posicionLetra(){
   var frase = document.getElementById('frase').value;
   var palabra = document.getElementById('palabra').value;
   if (frase.lastIndexOf(palabra) == -1){
      texto.innerHTML = "NO HAY COINCIDENCIAS";
   }else{
      texto.innerHTML = "POSICIÓN: " + (frase.lastIndexOf(palabra) +1);
   }
}