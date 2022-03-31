//'use strict'

const formulario = document.querySelector('#formularioSocio')
const contenedorEscribirSocios = document.getElementById(
  'contenedorPintarSocios'
)

var socio = new Array();
var nombreCapturado;
var apellidoCapturado;


function addSociosInicialesArray () {
  //  Carga el fichero JSON, parsea a objetos tipo "socio" y los añade al array
socio = JSON.parse( '[{"id": 1, "nombre": "Andoni", "apellido":"Larrieta"},{"id": 2, "nombre":"Jon", "apellido":"Agirre"},{"id": 3, "nombre":"Patxi", "apellido":"Mujika"}]');
}

function capturarDatosSocio () {
	creacionSocio();
   if(nombreCapturado != "" && apellidoCapturado != ""){
      	agregarSociosArray();
   }
   nombreCapturado="";
   apellidoCapturado="";
 }
   
function agregarSociosArray(){
	/* Evitamos que se agregue al array  el más de una vez el contenido de las cajas de texto del
	formulario */
	//if (socio.length <= 3){
		socio.push(nuevoSocio);
	//}
}

function creacionSocio(){
	// Constructor de la clase SocioNuevo
   function SocioNuevo(id,nombre, apellido){
	   // Propiedades de la clase SocioNuevo
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;   
   }
   
   function crearId () {
		id = socio.length + 1;
		return id;
   }
	
   nombreCapturado = document.getElementById('tNombre').value;
   apellidoCapturado = document.getElementById('tApellido').value;
   var nuevaId= crearId();
   // Creación de un obteto de la clase SocioNuevo
   nuevoSocio = new SocioNuevo(nuevaId,nombreCapturado, apellidoCapturado);
}

function pintarListaSocios () {
  //Borra el contenido del div
	 borrarContenido();
  for (var i = 0; i < socio.length; i++) {
         document.getElementById("contenedorPintarSocios").innerHTML += "Socio número " + socio[i].id + " : " + socio[i].nombre + " " +  socio[i].apellido + '<br/>';
   }
  
   function borrarContenido(){
   document.getElementById('contenedorPintarSocios').innerHTML = '';
  }
}

addSociosInicialesArray ();

