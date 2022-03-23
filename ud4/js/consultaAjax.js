'use-strict'

var datos
var url = 'https://api.covid19api.com/countries';

function pedirDatos(){
   return new Promise(function (resolve,reject){
      $.ajax({
         url: url,
         success: function(data){
            console.log('Pedir datos')
            resolve(data)
         },
         error: function(error){
            reject(error)
         }
      })
   })
}

function pintar(){
	console.log(datos)
	document.getElementById('cabecera').innerHTML = datos[0].Country
}

pedirDatos()
.then(function(data){
   datos = data
   console.log(datos)
   pintar()
})
.catch(function(err){
   console.log(err)
})
