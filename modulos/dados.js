

const pessoa = {
    nome: 'Jon Oliva',
    idade: 25,
    cidade: "São Paulo"
};

const livro = {
    titulo: "O senhor dos anéis",
    volume: "As duas torres",
    ano: 1954
};

/* se for exportação de somente um recurso usamos export default nomeDoRecurso */
//export default pessoa;
export { pessoa, livro };