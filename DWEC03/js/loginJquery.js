'use-strct'

var json = `[
   {
      "id" : 1, 
      "nombre" : "Iker", 
      "apellido" : "Arana", 
      "usuario" : "iarana", 
      "passwd" : "1234Abcd"
   },
   {
      "id" : 2, 
      "nombre" : "Andoni", 
      "apellido" : "Larrieta", 
      "usuario" : "alarrieta", 
      "passwd" : "5678Efgh"
   },
   {
      "id" : 3, 
      "nombre" : "Jon", 
      "apellido" : "Olano", 
      "usuario" : "jolano", 
      "passwd" : "9012Ijkl"
   }
]`

$(document).ready(function(){
   inicio();
   $('#formLogin').submit(function(event){
      console.log("Formulario enviado")
      let textoLogin = document.getElementById('loginTexto')
      textoLogin.type = 'hidden'
      var formulario = document.getElementById('formLogin').elements
      if(comprobarCredenciales(formulario[0].value, formulario[1].value)){
         alert("USUARIO LOGEADO CON ÉXITO")
         window.location.href='juegoJquery.html'
      }else{
         textoLogin.type = 'text'
         textoLogin.value = "USUARIO NO REGISTRADO"
         textoLogin.style.backgroundColor = 'red'
      }
      event.preventDefault()
   })
})

function inicio(){
   jsonData =JSON.parse(json)
   let baseDatos = new Array()
   let i
   for(i=0; i< jsonData.length; i++){
      baseDatos.push(jsonData[i])
   }
   guardarArrayLocalStorage(baseDatos);
   recuperarNombresLocalStorage();
}

function guardarArrayLocalStorage(db){
   localStorage.setItem('nombresBD', JSON.stringify(db))
}

function recuperarNombresLocalStorage(){
   let jsonBD = JSON.parse(localStorage.getItem('nombresBD'))
   datosRecuperados = new Array()
   let i
   for(i=0; i<jsonBD.length; i++){
      datosRecuperados.push(jsonBD[i])
   } 
}
function comprobarCredenciales(usuario, passwd){
   let i
   for (i = 0; i < datosRecuperados.length; i++){
      if(datosRecuperados[i].usuario == usuario){
         if(datosRecuperados[i].passwd == passwd){
            return true
         }else{
         }
      }
   }
   return false
}
