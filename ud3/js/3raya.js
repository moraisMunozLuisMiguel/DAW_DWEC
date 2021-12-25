// Declaramos global con tablero de 3x3
var tablero = [
    [],
    [],
    []
];
// Declaramos el turno
var turno = 'X';
// Variable que dice si estamos en juego o no
var enJuego = true;


//funcion que obtiene un numero aleatorio entre A (menor) y B (mayor)
function numeroAleatorio(A, B) {
    return Math.floor((Math.random() * B) + A);
}



// Funcion que recibe un turno y comprueba si se ha ganado o no
function haGanado(t) {

    /**
     * 0,0 0,1 0,2
     * 1,0 1,1 1,2
     * 2,0 2,1 2,2
     *      *
     */

    // Como son 8 casos, los ponemos a mano
    if (tablero[0][0] == t && tablero[0][0] == tablero[0][1] && tablero[0][0] == tablero[0][2])
        return true;
    if (tablero[1][0] == t && tablero[1][0] == tablero[1][1] && tablero[1][0] == tablero[1][2])
        return true;
    if (tablero[2][0] == t && tablero[2][0] == tablero[2][1] && tablero[2][0] == tablero[2][2])
        return true;

    if (tablero[0][0] == t && tablero[0][0] == tablero[1][0] && tablero[0][0] == tablero[2][0])
        return true;
    if (tablero[0][1] == t && tablero[0][1] == tablero[1][1] && tablero[0][1] == tablero[2][1])
        return true;
    if (tablero[0][2] == t && tablero[0][2] == tablero[1][2] && tablero[0][2] == tablero[2][2])
        return true;

    if (tablero[0][0] == t && tablero[0][0] == tablero[1][1] && tablero[0][0] == tablero[2][2])
        return true;

    if (tablero[0][2] == t && tablero[0][2] == tablero[1][1] && tablero[0][2] == tablero[2][0])
        return true;


    // Si no se cumple ningun caso no hay victoria
    return false;


}

// Funcion que se ejecuta cuando se carga la pagina completamente

$(document).ready(function () {
    // Inicializamos turno y tablero
    turno = 'X';
    tablero = [
        [],
        [],
        []
    ];

    // Inicializamos a vacio el tablero
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            tablero[i][j];
        }
    }

    // Indicamos quien tiene el turno actualmente
    $("#pTurno").text("Turno jugador " + turno);

    // Por cada  fila
    for (var i = 1; i <= 3; i++) {

        // para cada columna
        for (var j = 1; j <= 3; j++) {

            // Ponemos la imagen vacia de forma inicial
            $("#c" + i + "" + j).children().first().attr("src", "./img/vacio.png");

            // Evento por cada jugador y carta
            $("#c" + i + "" + j).click(function () {

                // Si no estamos jugando, no se hace nada...
                if (enJuego == false) {
                    return;
                }

                // Para saber el jugador, extraemos el texto del id las posiciones de cada jugador
                // y restamos 1 para la equivalencia con el array del tabalero
                valoriExtraidoID = parseInt($(this).attr("id").slice(-2, -1)) - 1;
                valorjExtraidoID = parseInt($(this).attr("id").slice(-1)) - 1;



                // Si es su turno y no esta ya marcada, podemos marcarla
                if (tablero[valoriExtraidoID][valorjExtraidoID] != 'X' && tablero[valoriExtraidoID][valorjExtraidoID] != 'O') {
                    // Marcamos el tablero
                    tablero[valoriExtraidoID][valorjExtraidoID] = turno;
                    // Ponemos la imagen
                    $(this).children().first().attr("src", "./img/" + turno + ".png");

                    // Comprobamos si ha ganado
                    if (haGanado(turno)) {
                        // Si ha ganado, dejamos de estar en juego y modificamos el mensaje
                        // del turno, indicando quien ha ganado
                        enJuego = false;
                        $("#pTurno").text("El ganador es " + turno);
                        // Ponemos un borde rojo para destacar
                        $("#pTurno").css({"border-color": "red",
                        "border-width":"1px",
                        "border-style":"solid"});
                        // Finalizamos
                        return;
                    }

                    // Cambiamos de turno
                    if (turno == 'X') {
                        turno = 'O';
                    } else {
                        turno = 'X';
                    }
                    // Establecemos texto del turno
                    $("#pTurno").text("Turno jugador " + turno);




                }
            });
        }
    }


});
