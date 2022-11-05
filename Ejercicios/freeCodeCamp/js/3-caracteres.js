/* Variables con cadenas de caracteres */
var nombre = "Josue Alejandro Pérez Benito, 23 años \"comillas\" ";
var nombre1 = 'Ana Cristina Pérez Benito, 20 años \'comillas simples\'';
console.log(nombre);
console.log(nombre1);
var texto = "texto 'comillas simples'";
console.log(texto);
texto = 'texto "comillas dobles"';
console.log(texto);


/* 
Secuencias de escape

Codigo | Resultado
-------------------------
 \'  Comilla simple
 \"  Comilla doble
 \\  Barra invertida
 \n  Linea nueva
 \r  retorno de carro
 \t  tabulacion
 \b  retroceso
 \f  salto de pagina
-------------------------
*/

console.log("Estoy aprendiendo \"JavaScript\"");
console.log("Estoy aprendiendo \' Javascript\'");
console.log("Estoy aprendiendo \\ Javascript");
console.log("Estoy aprendiendo \n Javascript");
console.log("Estoy aprendiendo \r Javascript");
console.log("Estoy aprendiendo \t Javascript");
console.log("Estoy aprendiendo \b Javascript");
console.log("Estoy aprendiendo \f Javascript");


/* Unir cadenas de caracteres */
var nom = "Alan "+"Turing";
console.log(nom);
nom = "Un famoso cientifico es "+nom;
console.log(nom);
var txt1 = "hola ";
var txt2 = "mundo";
txt1 += txt2;
console.log(txt1);


/* longitud de una cadena de caracteres */
var miCadena;
miCadena = "A";
console.log(miCadena.length);
miCadena = "AB";
console.log(miCadena.length);
miCadena = "Amazon";
console.log(miCadena.length);
miCadena = "A B";
console.log(miCadena.length);

/* Notacion de corchetes */
miCadena = "JavaScript";
/* 
Cadena:     J|a|v|a|S|c|r|i|p|t
Indices:    0|1|2|3|4|5|6|7|8|9
*/

console.log(miCadena[0]);
console.log(miCadena[1]);
console.log(miCadena[2]);
console.log(miCadena[3]);
console.log(miCadena[4]);
console.log(miCadena[5]);
console.log(miCadena[6]);
console.log(miCadena[7]);
console.log(miCadena[8]);
console.log(miCadena[9]);


/* Inmutabilidad:
    miCadena = "hola";
    miCadena[0] = "c"; //error
    las cadenas de caracteres no se pueden modificar
*/

/* ultimo caracter */
miCadena = "Python";
console.log(miCadena);
console.log("ultimo caracter: "+miCadena[miCadena.length -1]);


/* de derecha a izquierda */
miCadena = "JavaScript";
console.log(miCadena[miCadena.length -1]);
console.log(miCadena[miCadena.length -2]);
console.log(miCadena[miCadena.length -3]);
console.log(miCadena[miCadena.length -4]);
console.log(miCadena[miCadena.length -5]);
console.log(miCadena[miCadena.length -6]);
console.log(miCadena[miCadena.length -7]);
console.log(miCadena[miCadena.length -8]);
console.log(miCadena[miCadena.length -9]);
console.log(miCadena[miCadena.length -10]);