'use-strict'
$(document).ready(function(){
	// Selector ID
var parrafo = $("#parrafo1");
parrafo.css("background","red");

// Selector Clase
var parrafoClass = $(".parrafo");
parrafoClass.css("border","5px dashed black");

// Selector Etiqueta
var todosParrafos = $('p');
console.log(todosParrafos);

// Selector Atributo
$('[title=Google]').css("background","blue");

});
