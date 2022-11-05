/* ---------------------------------------- Objetos en javascript ---------------------------------------- */
const persona = {
  nombre: 'Homero',
  edad: 39,
  lugar: 'Springfield'
}

/* ---------------------------------------- Acceder a una propiedad especifica en un objeto */
/* console.log('edad: '+persona.edad);
console.log("nombre:"+persona.nombre); */

/* ---------------------------------------- Resultado de un objeto vacio */
/* const objeto = {};
console.log(objeto); */

/* ---------------------------------------- Objeto */
const auto = {
  marca: 'Ford',
  modelo: 'Fiesta',
  color: 'gris',
  anio: 2018
}
/* todo el objeto */
/* console.log(auto); */
/* atributo especifico del objeto */
/* console.log(auto.anio); */
/* console.log(auto.anio,auto.marca);
console.log(auto['anio']); */
/* ---------------------------------------- Cambiando elementos de un objeto */
/* auto.color = 'rojo';
console.log(auto['color']);
 */
/* ---------------------------------------- Agregando un atributo inexistente a un objeto */
/* auto.tipo = 'sedan';
console.log(auto); */

/* ---------------------------------------- Funcion constructora ---------------------------------------- */
/* const monitor1 = {
  marca:'SAMSUNG',
  pulgadas:14,
  precio:9000
}
const monitor2 = {
  marca:'LG',
  pulgadas:15,
  precio:8000
}
const monitor3 = {
  marca:'SONY',
  pulgadas:16,
  precio:7000
}
const monitor4 = {
  marca:'ASUS',
  pulgadas:18,
  precio:6000
} */

/* En lugar de crear todos los objetos necesarios se genera una funcion constructora donde esta herramienta nos permite 
crear varios objetos con una misma estructura */

function Monitor(marca,pulgadas,precio){
  this.marca = marca;
  this.pulgadas = pulgadas;
  this.precio = precio;
}

const monitor1 = new Monitor('LG',22,2800);
const monitor2 = new Monitor('SAMSUNG',24,1560);
const monitor3 = new Monitor('SONY',32,1700);
const monitor4 = new Monitor('PANASONIC',54,4800);
console.log(monitor1);