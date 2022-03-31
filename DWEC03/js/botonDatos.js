botonAgregarDatos.addEventListener('click', function(){
   agregarDatos();
});

botonEliminarDatos.addEventListener('click', function(){
   eliminarDatos();
});

var lista = document.getElementById('lista');

function agregarDatos(){
   do{
      var palabras = prompt("INTRODUCE TEXTO:");
   } while (palabras == "");
   if (palabras != null){
      var elemento = document.createElement('li');
      var texto = document.createTextNode(palabras);
      elemento.appendChild(texto);
      lista.appendChild(elemento);
   }
}
function eliminarDatos(){
   
   if (lista.children.length > 0){
      var elemento = lista.children[lista.children.length -1];
      elemento.parentNode.removeChild(elemento);
   }else{
      alert("NO HAY ELEMENTOS");
   }
}