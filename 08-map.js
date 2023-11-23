// 08-map.js
import cursos from "./modulos/cursos.js";


/* map (mapear - transformar em outra ocisa)
passar por elementos de um array e realiza operações em cada um deles através de uma função (callback), gerando um novo array.
*/

//exemplo 1
const numeros = [10, 20, 5, 12, 66, 50];
console.log(numeros);

const numerosDobrados = numeros.map( numero => numero * 2);
console.log(numerosDobrados);


console.log("----------");

console.log(cursos);

//exemplo 2 

const titulos = cursos.map( curso => curso.titulo );

console.log(titulos);