const botao = document.querySelector("#carregar");
const divUsuarios = document.querySelector("#lista-de-usuarios");
const tabela = document.getElementById("tabela");

botao.addEventListener("click", async function(){
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!resposta.ok){
            throw new Error(resposta.status);
        }

        const dados = await resposta.json();

        for (const usuario of dados){
            const lista = document.createElement("tr");
            lista.innerHTML = `
            
            <td> ${usuario.name}</td>
            <td>${usuario.username}</td>
            <td>${usuario.email}</td>
            <td>${usuario.address.street}, ${usuario.address.suite}</td>`


            tabela.appendChild(lista);
        }


    } catch (error) {
        console.error(error.message);
    }
});












