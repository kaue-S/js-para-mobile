

function converterMaiusculas(texto){
    return texto.toUpperCase();
}

function converterMinusculas(texto){
    return texto.toLowerCase();
}

function formataMoeda(valor){
    return valor.toLocaleString("pt-br", {
        style: "currency", 
        currency: "BRL"
    });
}

export { converterMaiusculas, converterMinusculas, formataMoeda }