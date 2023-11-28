// 12- async-await.js

/* Comunicação assíncrona (ajax) para carregamento de dados usando fetch e a sintaxe async/await através de função (obrigatório o uso de função) */

const apiUrl = `https://jsonplaceholder.typicode.com/photos/1`;

async function acessaAPI(){
    try {
        const resposta = await fetch(apiUrl);

        if(!resposta.ok){
            throw new Error (`Erro na requisição: ${resposta.status} - ${resposta.statusText}`);
        }

        const dados = await resposta.json();
        console.log(dados);
    } catch (error) {
        console.log("Erro :" +error.message);
    }
}

acessaAPI();