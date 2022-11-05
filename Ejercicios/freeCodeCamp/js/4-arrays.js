/* Arreglos == Arrays */
var miArreglo = ["John", 24];
console.log(miArreglo);

var estudiantes = ["Nora", "Gino", "Emily", "Juan"];
console.log(estudiantes);

var notas = [95, 67, 86, 56];
console.log(notas);

var listaEstudiantes = [["Nora", 68], ["Gino", 56]];
console.log(listaEstudiantes);

/* Acceder a los elementos en un array */
miArreglo = [10, 20, 30];
/* 
Arreglo:    [10,20,30]
Indices:      0  1  2
*/

console.log("elemento 1: " + miArreglo[0]);
console.log("elemento 2: " + miArreglo[1]);
console.log("elemento 3: " + miArreglo[2]);


/* Operaciones con aritmeticas con arreglos */
var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
console.log(suma);

var resta = -miArreglo[0] + miArreglo[1] + miArreglo[2];
console.log(resta);

var multiplicacion = miArreglo[0] * miArreglo[1] * miArreglo[2];
console.log(multiplicacion);

var division = miArreglo[0] / (miArreglo[2] - miArreglo[1]);
console.log(division);


/* Modificar un arreglo */
miArreglo = [1, 2, 3];
miArreglo[0] = 20;
console.log(miArreglo);
miArreglo[1] = [4, 5, 6];
console.log(miArreglo);


/* Arreglos anidados == Arreglos multidimencionales */
miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
/* 
Arreglo             [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Indices                     0           1         2
Indices internos      0  1  2    0  1  2    0  1  2
*/

console.log(miArreglo[0][0]);
console.log(miArreglo[0][1]);
console.log(miArreglo[0][2]);

console.log(miArreglo[1][0]);
console.log(miArreglo[1][1]);
console.log(miArreglo[1][2]);

console.log(miArreglo[2][0]);
console.log(miArreglo[2][1]);
console.log(miArreglo[2][2]);


/* ---------------------------------------- PUSH ---------------------------------------- 
la funcion push añade un elemento al final del arreglo.
*/
var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.push("Verano");
console.log(estaciones);

/* ---------------------------------------- POP ---------------------------------------- 
la funcion pop remueve el ultimo elemento del arreglo.
*/
estaciones.pop();
console.log(estaciones);
var estacion = estaciones.pop();
console.log(estaciones);
console.log(estacion);

/* ---------------------------------------- Shift ---------------------------------------- 
la funcion shift remueve el primer elemento del arreglo.
*/
estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
estaciones.shift();
console.log(estaciones);

/* ---------------------------------------- UnShift ---------------------------------------- 
la funcion unshift añade un elemento al principio del arreglo.
*/
estaciones = ["Otoño", "Primavera", "Verano"];
estaciones.unshift("Verano");
console.log(estaciones);