

const nome = "Chapolin";
const sobrenome = "Colorado";
let idade = 25;
let cidade = "São Paulo";
let estado = "SP";

/* Concatenação tradicional usando operador + Meu nome é chapolin colorado, tenho 5 anos e moro atualmente na cidade de são paulo */

let mensagem1 = "Olá, meu nome é <b>"+nome+"</b> "+sobrenome+", tenho "+idade+" anos e moro na cidade de "+cidade+" "+estado+"."
console.log(mensagem1);

/* Template Literal/string */
let mensagem2 = `Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos, moro na cidade de ${cidade} - ${estado}.`;
console.log(mensagem2);