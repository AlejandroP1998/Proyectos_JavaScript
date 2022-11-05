/* Funciones en JavaScript */

/* ---------------------------------------- Ejemplo ---------------------------------------- */
function mostrarMensaje() {
    console.log("Hola mundo");
}

mostrarMensaje();

/* ---------------------------------------- Argumentos ---------------------------------------- */

//ejemplo de suma
function sumar(a, b) {
    var resultado = a + b;
    /* return indica que la funcion retornara algun valor */
    return resultado;
}

console.log(sumar(10, 2));
var x = 5;
var y = 8;
console.log(sumar(x, y));

//ejemplo de concatenar cadenas
function concatenar(cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3)
}

concatenar("estoy", "aprendiendo", "a programar.")

/* ---------------------------------------- Ambito global ---------------------------------------- */
var varGlobal = 5;
console.log("fuera de una funcion " + varGlobal);
function miFuncion() {
    console.log("dentro de una funcion " + varGlobal);
}
miFuncion();

/* ---------------------------------------- Ambito local ---------------------------------------- */
function miFuncion1() {
    var hey = "hey listen!";
    console.log(hey);
}
miFuncion1();
//console.log(hey);  <<---- error

/* ---------------------------------------- Cola queue ---------------------------------------- */
function elementoEnFila(arreglo, elemento) {
    arreglo.push(elemento); //agregar al final del arreglo
    return arreglo.shift(); //remover el primer elemento
}

var miArreglo = [1, 2, 3, 4, 5];

console.log("Antes: "+JSON.stringify(miArreglo));
console.log(elementoEnFila(miArreglo,6));
console.log("Despues: "+JSON.stringify(miArreglo));
