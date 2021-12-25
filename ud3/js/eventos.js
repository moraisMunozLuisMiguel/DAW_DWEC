// var boton = document.querySelector("#boton");
function cambiarColorBoton(){
	var bg = boton.style.background;
	if(bg == "green"){
		boton.style.background = "red";
	}else{
		boton.style.background = "green";
	}
	boton.style.padding = "30px";
	boton.style.border = "1px solido #ccc";
}

var boton = document.querySelector("#boton2");
boton.addEventListener('click', function(){
	cambiarColorBoton();
});

boton.addEventListener('mouseover', function(){
	boton.style.background = "yellow";
});

boton.addEventListener('mouseout', function(){
	boton.style.background = "#ccc";
});

var input = document.querySelector("#nombre");
input.addEventListener('focus',function(){
	console.log("Estás dentro del evento Focus");
});

input.addEventListener('blur',function(){
	console.log("Estás fuera del evento Blur");
});

input.addEventListener('keydown',function(){
	console.log("Estás pulsando una tecla Keydown");
});

input.addEventListener('keypress',function(){
	console.log("Has oulsado una tecla keypress");
});

input.addEventListener('keyupp',function(){
	console.log("Has soltado una tecla keyupp");
});
