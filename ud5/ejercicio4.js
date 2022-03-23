// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
var getAvenger = function (nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        mensaje = "".concat(nombre, " tiene el poder de: ").concat(poder, "  y un arma: ").concat(arma, " ");
    }
    else {
        mensaje = nombre + " tiene un " + poder;
        mensaje = "".concat(nombre, " tiene un: ").concat(poder);
    }
    return mensaje;
};
console.log(getAvenger("Mujer maravilla", "", ""));
