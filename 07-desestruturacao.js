// 07- desestruturação 

/* Destructing ou desestruturação
Extrair os dados de array e objetos para variáveis/constantes individuais
*/

//Destructuring em arrays
const alunas = ["Tanaka", "Zimbo", "Melissa"];
const [tanaka, zimbo, melissa] = alunas;

console.log(tanaka);
console.log(zimbo);
console.log(melissa);

const unidades = [ "Penha", "Tatuapé", "Itaquera", "São Miguel" ];
const [penha, tatuape, , smp] = unidades;

console.log(penha);
console.log(tatuape);
console.log(smp);

console.log("-----------");

const [tesla, einstein, newton] = ["tesla", "Einstein", "Newton"];

console.log(tesla);
console.log(einstein);
console.log(newton);

console.log("-------");

const recursos = [
    ["Notebook", "TV Led", "Computador Desktop"],
    
   texto => texto.toUpperCase()
];

// destructuring
const [produtos, converter] = recursos;

//acesso através da constante que foi gerada pelo destructuring
console.log(produtos[1]); //tv led

for(const produto of produtos) {

    console.log("Produto: "+produto);
}

console.log( converter("Tiago") );
console.log( converter("geladeira") );
console.log( converter(produtos[0]) );


console.log("-----------");

//destructuring em objetos
const pessoa = {
    nome: "Andre",
    idade: 19,
    bairro: "Penha",
    situacao: "Crítica"
};

const { nome, idade, bairro, situacao } = pessoa;

console.log(`O aluno ${nome} está em situacao ${situacao} no curso. mora na ${bairro} e mesmo assim sempre atrasa...:`);


    //criando apelido para a propriedade código
const { codigo:pedido, cursos, preco } = { codigo: "123abc", cursos: ["Figma", "Node.js"], preco: 1000}

console.log(pedido);
console.log(cursos[0]);
console.log(preco);

console.log("---------");

//Destructing para parâmetros de função

function exibirDados(objeto){
    console.log(`filme: ${objeto.titulo} - Ano de lancamento: ${objeto.ano}`);
}

const filme1 = {
    titulo: "Vingadores",
    ano: 2023
};

const filme2 = {
    titulo: "Barbie",
    ano: 2023
};

exibirDados(filme1);
exibirDados(filme2);

