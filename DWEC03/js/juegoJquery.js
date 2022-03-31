'use-strct'
var color = ''
var tabla, tblBody

$(document).ready(function(){
   crearTabla()
   $('#rojo').click(function(){
      color = 'rojo'
      pintarPantallaColorSeleccionado()
   })
   $('#verde').click(function(){
      color = 'verde'
      pintarPantallaColorSeleccionado()
   })
   $('#amarillo').click(function(){
      color = 'amarillo'
      pintarPantallaColorSeleccionado()
   })
   $('#azul').click(function(){
      color = 'azul'
      pintarPantallaColorSeleccionado()
   })
   $('#blanco').click(function(){
      color = 'blanco'
      pintarPantallaColorSeleccionado()
   })
})

function crearTabla(){
   tabla = document.createElement('table')
   cuerpoTabla = document.createElement('tbody')
   tabla.border = '5'

   var presionado = false
   for(let i = 0; i< 30; i++){
      let fila = document.createElement('tr')
      for(let j = 0; j < 60; j++){
         let celda = document.createElement('td')
         celda.width = '25'
         celda.height = '10'
         celda.addEventListener('click', function(){
            if(!presionado){
               presionado = true
            }else{
               presionado = false
            }
         }, false)
         celda.addEventListener('mousemove', function(){
            if(presionado){
               pintarCelda(i, j)
            }
         }, false)
         fila.appendChild(celda)
      }
      cuerpoTabla.appendChild(fila)
   }
   tabla.appendChild(cuerpoTabla)
   zonaDibujo.appendChild(tabla)
}

function pintarPantallaColorSeleccionado(){
   let divColorSeleccionado = document.getElementById('idColorSeleccionado')
   divColorSeleccionado.innerHTML = ''
   divColorSeleccionado.innerHTML = 'COLOR SELECCIONADO: ' + color
}

function pintarCelda(numFila, numCelda){
   let fila = tabla.getElementsByTagName('tr')[numFila]
   let celda = fila.getElementsByTagName('td')[numCelda]
   if(color == 'rojo'){
      celda.style.backgroundColor='red'
   }else if(color == 'verde'){
      celda.style.backgroundColor='green'
   }else if(color == 'amarillo'){
      celda.style.backgroundColor='yellow'
   }else if(color == 'azul'){
      celda.style.backgroundColor='blue'
   }else if(color == 'blanco'){
      celda.style.backgroundColor='white'
   }
}
