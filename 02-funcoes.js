//funções

//Sintaxe anônima associada à bariável/constante
const exemplo1 = function () {
    console.log("função anônima");
};

exemplo1();

// sintaxe declarada ou nomeada
function exemplo2() {
    console.log("Função nomeada!");
};

exemplo2();


// sintaxe nomeada ou declarada
function calcular(valor1, valor2) {

   return valor1 - valor2;
};

let resultado = calcular(35, 20);
let resultado2 = calcular(70, 32);
let resultado3 = calcular(70, 160);

console.log(resultado);
console.log(resultado2);
console.log(Math.abs(resultado3));


// Sintaxe Arrow function

const exemplo3 = () => {
    console.log("Arrow function");
};

exemplo3();


// const saudacao = (cliente) => {
//     console.log("Olá, " + cliente);
// };

// omitir os parênteses do parâmetro (somente quando for 1)
// const saudacao = cliente => {
//     console.log("Olá, " + cliente);
// };

// omitir as chaves somente quando for uma única instrução
const saudacao = cliente => console.log("Olá, " +cliente);

saudacao("Fulano");
saudacao("Beltrano");

const calculaMetade = (valor) => {
    return valor / 2;
};

let = resultadoA = calculaMetade(100);
let = resultadoB = calculaMetade(666);

console.log(resultadoA);
console.log(resultadoB);