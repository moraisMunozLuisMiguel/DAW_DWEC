var botonContador = document.getElementById("botonContador");
botonContador.addEventListener('click', function(){
   contadorClicks();
});
function contadorClicks(){
   if (localStorage.contador){
      localStorage.contador = Number(localStorage.contador) + 1;
   }else{
      localStorage.contador = 1;
   }
   document.getElementById("resultado").innerHTML = "CLICKS: " + localStorage.contador;
}