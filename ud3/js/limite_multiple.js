function principal(){
	let limiteText = document.getElementById("limite").value;
	let multiploText = document.getElementById("multiplo").value;
	
	let limite = parseInt(limiteText);
	let multiplo = parseInt(multiploText);
	
	try {
		if (limite <= 0 || multiplo <= 0){
			throw new Error("El límite o el múltiplo debe ser mayor que 0");
		}else if (multiplo > limite){
			throw new Error("El multiplo es mayor que el límite");
		}else{
			let divNumeros = document.getElementById("numeros");
			divNumeros.innerHTML=" ";
			divNumeros.innerHTML="<ul>";
			for (let i = 1; i <= limite; i++){
				if(i % multiplo === 0){
					divNumeros.innerHTML += "<li>" + i + "</li>";
				}
			}
			divNumeros.innerHTML +="</ul>";
		}
	} catch(error){
		alert(error)
	}
	
	
	
}