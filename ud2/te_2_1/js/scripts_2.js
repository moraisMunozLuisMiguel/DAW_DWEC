//'use strict'

console.log('Empieza el programa')

// ------------------- VARIABLES GLOBALES ------------------------

// capturamos el formulario de introduccion de socios - Ejercicio 1
const formulario = document.querySelector('#formNombre')

// capturamos el contenedor donde escribiremos los socios - Ejercicio 2
const contenedorEscribirSocios = document.getElementById(
  'contenedorPintarSocios'
)

// TODO: array para añadir los socios
// ------------------- FUNCIONES ------------------------

var socio = new Array();
var nombreCapturado;
var apellidoCapturado;

/* 
TODO:  metodo para añadir socios al array 
			 cuando arranca la pagina web
*/

function aniadirSociosInicialesArray () {
  //  TODO: cargar el fichero JSON, parsearlo a objetos tipo "socio" y añadirlos al array
socio = JSON.parse( '[{"id": 1, "nombre": "Andoni", "apellido":"Larrieta"},{"id": 2, "nombre":"Jon", "apellido":"Agirre"},{"id": 3, "nombre":"Patxi", "apellido":"Mujika"}]');
}

/*
    TODO: Metodo para capturar los datos del socio introducidor en el formulario

*/
   
function capturarDatosSocio () {  
	creacionSocio();
	if (nombreCapturado != "" && apellidoCapturado !=""){
			agregarSociosArray();	
	}
	nombreCapturado = "";
	apellidoCapturado ="";
 }
   
function agregarSociosArray(){
	socio.push(nuevoSocio)
}

  // TODO: recoger los el nombre y apellido del HTML
  // TODO: crear el socio y añadirlo al array

/* 
TODO: Metodo para crear un socio pasandole el nombre y el apellido
            y añadirlo al array
 */
 
function creacionSocio(){
	// Constructor de la clase SocioNuevo
   function SocioNuevo(id,nombre, apellido){
	   // Propiedades de la clase SocioNuevo
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;   
   }
   /*
	TODO: Metodo para crear el ID del socio en funcion del ultimo
                ID que hay en el array de socios
	*/
	
   function crearId () {
  // TODO: mirar el id del ultimo socio del array y sumarle uno
		id = socio.length + 1;
		return id;
   }
	
   nombreCapturado = document.getElementById('fnombre').value;
   apellidoCapturado = document.getElementById('fapellido').value;
   var nuevaId= crearId();
   // Creación de un obteto de la clase SocioNuevo
	nuevoSocio = new SocioNuevo(nuevaId,nombreCapturado, apellidoCapturado);
}

/*
  TODO: metodo que elimina la lista previamente pintada en el contenedor asignado 
              para pintar socios, recorre el array con un bucle y pinta los socios 
*/
function pintarListaSocios () {
  //TODO: borramos todo lo que hay en el div
	 borrarContenido();

  //TODO: bucle para recorrer y pintar el array de socios
  //TODO: debemos añadir los socios a la pagina web
  
  for (var i = 0; i < socio.length; i++) {
         document.getElementById("contenedorPintarSocios").innerHTML += "Socio número " + socio[i].id + " : " + socio[i].nombre + " " +  socio[i].apellido + '<br/>';
   }
  
   function borrarContenido(){
   document.getElementById('contenedorPintarSocios').innerHTML = '';
  }
}

// ------------------- MAIN ------------------------

// TODO: añadimos los socios iniciales cuando empieza el programa
aniadirSociosInicialesArray ();
console.log('Acaba el programa')
