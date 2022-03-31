window.onload=inicializar;

function inicializar(){
   document.getElementById("crearVentana").onclick=crearVentana;
   document.getElementById("cerrarVentana").onclick=cerrarVentana;
}

var nuevaVentana;

function crearVentana(){
   nuevaVentana = window.open("http://www.google.es", "","height=400, width=800");
}

function cerrarVentana(){
   if (nuevaVentana){
      nuevaVentana.close();
   }
}