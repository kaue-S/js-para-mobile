
/* Conceito 
    usando o ... com "rest operator"
    podemos mesclar uma lista de parâmetro/argumentos para uma função
*/

const cientistas = ["Tesla", "Einstein", "Newton", "Darwin"];
const artistas = ["Jon", "Ozzy", "David", "Roger", "Floor", "Neil"];

const classificar = (...parametros) => {
    return parametros.sort();
};

console.log( classificar(...cientistas) ); //spread
console.log( classificar(...artistas) ); //spread