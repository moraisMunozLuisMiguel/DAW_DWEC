var pintando=true;
var colores = new Array('red', 'yellow','green','blue','white');
var miColor=colores[0];
var numSelecc=1;

window.onload=inicioJuego;

function inicioJuego(){	
	var elementoTabla = document.createElement('table');
	elementoTabla.setAttribute('id','miTabla');
	elementoTabla.style.align='center';
	elementoTabla.style.border='2';
	elementoTabla.style.borderStyle='solid';
	elementoTabla.style.padding='0px';
	elementoTabla.style.spacing='0px';
	elementoTabla.style.margin='0px';
	var crearEvento = function(elemento,evento,mifuncion){
		
		function crearEvento(elemento, evento, mifuncion){
			elemento.addEventListener(evento, mifuncion, false);
		}
    
		if (typeof window.addEventListener !== 'undefined'){
			return crearEvento;
		}
	}();     
	
	var quitarEvento = function(elemento,evento,mifuncion){
		function quitarEvento(elemento,evento,mifuncion){
			elemento.removeEventListener(evento,mifuncion);
		}
		if (typeof window.removeEventListener !== 'undefined'){
			return quitarEvento;
		}
	}();
	
	// Creación de la tabla de dibujo
	for(i=1;i<=30;i++){
		var elementoTR = document.createElement('tr');
		elementoTR.style.padding='0px';
		elementoTR.style.spacing='0px';
		elementoTR.style.margin='0px';
		for(e=1;e<=30;e++){
			var bx="box_"+i+"_"+e;
			var elementoTD = document.createElement('td');
			elementoTD.setAttribute('id',bx);
			elementoTD.style.width='10px';
			elementoTD.style.height='10px';
			elementoTD.style.border='2px';
			elementoTD.style.borderColor='black';
			elementoTD.style.borderStyle='solid';
			elementoTD.style.padding='0px';
			elementoTD.style.spacing='0px';
			elementoTD.style.margin='0px';
			elementoTR.appendChild(elementoTD);
		}
		elementoTabla.appendChild(elementoTR);
	}
	
	var tablero=document.getElementById('zonadibujo');
	tablero.appendChild(elementoTabla);
	crearEvento(tablero,'mousedown',inicio);
	// ponemos en objetoClase el primer TR de la tabla paleta de colores
	var objetoClase = document.getElementById('cuadroColores').getElementsByTagName('tr').item(0);
	// asignamos el evento de pulsación del ratón a cada uno de los colores
	// de la paleta de colores. Cada color con su evento
	for(c=0;c<5;c++){
		numColor = objetoClase.getElementsByTagName('td').item(c);
		numColor.className="color"+(c+1);
		crearEvento(numColor,'mousedown',cambio);
	}
	// Seleccionamos el primer color por defecto. Cuando pulsemos en otro color cambiará
	seleccionado=objetoClase.getElementsByTagName('td').item(0);
	seleccionado.className+=" seleccionado";
	document.getElementById('mensajeColorSeleccionado').innerHTML="COLOR SELECCIONADO: ROJO";
	
   // Función que cambia el color según nuestra pulsación sobre los colores
	function cambio(){
		// ponemos todas los colores con la clase color y su número y así conesguimos
		// quitarle la clase seleccionado al que la tuviese
		for(i=0;i<5;i++){
			objetoClase.getElementsByTagName('td').item(i).className="color"+(i+1);
		}
		numSel=this.className.substring(5,6)-1;
		this.className=this.className+" seleccionado";
		miColor=colores[numSel];
		switch (miColor){
				case "red":
					color = "ROJO";
					break;
				case "yellow":
					color="AMARILLO";
					break;
				case "green":
					color="VERDE";
					break;
				case "blue":
					color="AZUL";
					break;
				case "white":
					color="BLANCO";
					break;
			}
			document.getElementById('mensajeColorSeleccionado').innerHTML="COLOR SELECCIONADO: " + color;
	}
	
	inicio();

	function inicio(){
		if(pintando){
			pintando=false;
			for(i=1;i<=30;i++){
				for(e=1;e<=30;e++){
					var capa = "box_"+i+"_"+e;
					quitarEvento(document.getElementById(capa),'mouseover',pintar);
				}
			}
		}else{
			pintando=true;
			for(i=1;i<=30;i++){
				for(e=1;e<=30;e++){
					var capa = "box_"+i+"_"+e;
					crearEvento(document.getElementById(capa),'mouseover',pintar);
				}
			}
		}
	}
	
	function pintar(){
			this.setAttribute('bgcolor',miColor);
	}
	
}