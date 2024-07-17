// Exemplo de palicação se queremos criar uma função que atualize o estoque do mercado:
function atualizarEstoque(estoque, ...produtos) {
    produtos.forEach(produto => {
        const [nome, quantidade] = produto;
        if (estoque[nome]) {
            estoque[nome] += quantidade;
        } else {
            estoque[nome] = quantidade;
        }
    });
    return estoque;
}

let estoque = {
    "maçã": 10,
    "banana": 5
};

estoque = atualizarEstoque(estoque, ["maçã", 5], ["laranja", 8], ["banana", 3]);
console.log(estoque);
// Saída: { maçã: 15, banana: 8, laranja: 8 }
