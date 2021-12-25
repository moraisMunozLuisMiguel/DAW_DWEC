window.onload=iniciar;
function iniciar(){
document.getElementById("enviar").addEventListener('click',validar,false);
}
function validar(){
// Teléfono: 123456789
var patronTelefono= /^\d{9}$/;
//Matrícula: 1234 ABC
var patronMatricula=/^\d{4} [A-Z]{3}$/;
if (patronTelefono.test(document.getElementById("telefono").value)){
if(patronMatricula.test(document.getElementById("matricula").value)){
if(confirm("¿Desea enviar el formulario?")){
document.getElementById("formulario").submit();
}
}else{
alert("Error: campo matricula incorrecta");
}
}else{
alert("Error: campo telefono incorrecto");
}
}