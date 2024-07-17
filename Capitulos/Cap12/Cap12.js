// Um exemplo de implementação para desconto:
function calcularPrecoTotal(precoUnitario, quantidade = 1, desconto = 0) {
    const precoTotal = (precoUnitario * quantidade) - desconto;
    console.log(`Preço Total: R$ ${precoTotal.toFixed(2)}`);
}

// Exemplo de uso:
calcularPrecoTotal(10.00, 3); // Preço Total: R$ 30.00
calcularPrecoTotal(5.50, 2, 1.00); // Preço Total: R$ 10.00
calcularPrecoTotal(15.00); // Preço Total: R$ 15.00