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

/* exercicio
    Use o map para gerar um novo array APENAS com os preços calculados com desconto de 10%
*/

const descontos = cursos.map (cursos => cursos.preco * 0.90)

console.log(descontos);

//desafio

const dadosCursos = cursos.map(function exibirCursos({id, titulo, categoria, preco}){
    console.log(`Id: ${id}, titulo: ${titulo}, categoria: ${categoria}, preco: ${preco * 0.90}` )
})


// const  cursosAtualizado = cursos.map(cursos => cursos);
const cursosAtualizado = cursos.map(curso => {
    return {...curso, preco: curso.preco * 0.90};

});


console.log(cursosAtualizado);
