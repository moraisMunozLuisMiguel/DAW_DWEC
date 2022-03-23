"use-strict";

$(document).ready(function(){
   var datosCoronavirus =$('#datosCoronavirus');
	$.get("https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=ES",function(response){
		 response.forEach(element =>{
         $(datosCoronavirus).append("DIARIOS: " + element.dailyConfirmed + 
		 "<br>TOTALES: " + element.totalConfirmed +
		 "<br>Por millón habitantes: " + element.totalConfirmedPerMillionPopulation)
      });
   });
   var datosCoronavirus2 =$('#datosCoronavirus2');
	  $.get("https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=ES",function(response){
		 response.forEach(element =>{
         $(datosCoronavirus2).append("DIARIAS: " + element.dailyDeaths + 
		 "<br>TOTALES: " + element.totalDeaths +
		 "<br>Por millón habitantes: " + element.totalDeathsPerMillionPopulation)
      });
   });
});
