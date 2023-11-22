import {pessoa, livro, alunos as reprovados }  from "./modulos/dados.js";
import alunos from "./modulos/alunos.js";
// import { converterMinusculas, converterMaiusculas, formataMoeda } from "./modulos/funcoes.js";
import * as minhasFuncoes from "./modulos/funcoes.js";

console.log(alunos);//usando o nome original do módulo
console.log(reprovados); //usando o módulo alunos através do apelido


console.log(pessoa);
// console.log(pessoa.nome);

for( const prop in pessoa){
    console.log(pessoa[prop]);
}

console.log(livro.titulo);
console.log(livro.volume);


console.log( minhasFuncoes.converterMaiusculas(reprovados[0]) );
console.log( minhasFuncoes.converterMinusculas(alunos[0]) );

let preco1 = 1200.80;
let preco2 = 100000.56;
let preco3 = 500.84662;

console.log( minhasFuncoes.formataMoeda(preco1));
console.log( minhasFuncoes.formataMoeda(preco2));
console.log( minhasFuncoes.formataMoeda(preco3));