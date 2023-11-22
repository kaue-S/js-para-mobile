

/* spread: espalhar, copiar elementos/dados de um array/objeto para dentro de outro array/objeto. */


//Spread com arrays
const bandasProg = ["Pink-floyd", "Rush", "Yes"];
const maisBandas = [...bandasProg, "Slayer", "Nightwish"];

console.log(bandasProg);
console.log(maisBandas);

//Spread com objetos

const cliente = {
    nome: "fulano",
    idade: 25,
    cidade: "São Paulo",

};

const novosDados = {
    ...cliente,
    estado: "Sp",
    pedido: "1254",
    total: 5000.28
}

console.log(novosDados);