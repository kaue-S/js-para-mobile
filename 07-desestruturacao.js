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
    
    function(texto) {
        return texto.toUpperCase()
    }
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