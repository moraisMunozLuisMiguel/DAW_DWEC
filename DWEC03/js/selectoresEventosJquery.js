'use-strict'
$(function(){
   var parrafo = $('#parrafo1');
   parrafo.css("background", "red");
   
   var parrafoClass = $(".parrafo");
   parrafoClass.css("border", "5px dashed black");
   
   var todosParrafos = $("p");
   todosParrafos.css("font-weight", "bolder");

   $('[title=Google]').css("background", "blue");
   var parrafo2 = $('#parrafo2');
   parrafo2.click(function(){
      $(this).css("background", "yellow");
   });

   var parrafo3=$('#parrafo3');
   parrafo3.dblclick(function(){
      $(this).css("background", "white") .css("color", "blue");
   });

   var parrafo4=$('#parrafo4');
   parrafo4.mouseover(function(){
      $(this).css("background", "green");
   });
   
})