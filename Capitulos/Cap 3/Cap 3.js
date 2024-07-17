// Métodos auxiliares para array

// Uso do forEach
console.log("Uso do forEach\nExemplo 1:");
var lista_mercado = ['maçã', 'pera', 'laranja', 'uva', 'sucrilhos', 'biscoito', 'bolacha'];
// Chamando método forEach para exibir os itens da lista
lista_mercado.forEach(function(item) {
    console.log(item);
});

// Declarando função antes de chamar o método forEach
console.log("Uso do forEach\nExemplo 2:");
function mostrar_itens(item) {
    console.log(item);
}
lista_mercado.forEach(mostrar_itens);

// Atenção: Cuidado ao incrementar itens usando forEach
console.log("Uso do forEach\nExemplo 3:");
var nova_lista = lista_mercado;
nova_lista.forEach(function(item) {
    lista_mercado.push('talher');
    console.log(item);
});
// O método forEach vai iterar apenas pela lista original antes de adicionar novos itens.
// O item novo será adicionado em cada interação, resultando em 7 adições.
console.log(lista_mercado);

console.log("Uso do map\nExemplo 1:");
var preco = [3, 4, 7, 4, 5, 6, 8];
// Aplicando desconto de 50% nos preços
var preco_desconto = preco.map(function(valor) {
    return valor / 2;
});
console.log(preco);
console.log(preco_desconto);

console.log("Uso do filter\nExemplo 1:");
var estoque = [
    { item: 'pão', preco: 6 },
    { item: 'uva', preco: 8 },
    { item: 'talher', preco: 10 }
];
// Filtrando itens que podem ser comprados com 7 reais
var item_compravel = estoque.filter(function(items) {
    return items.preco <= 7;
});
console.log(item_compravel);

console.log("Uso do find\nExemplo 1:");
// Verificando se há algum item do interesse no estoque
var item_interesse = estoque.find(function(items) {
    return items.item === 'talher';
});
console.log(item_interesse);

console.log("Uso do every\nExemplo 1:");
// Verificando se falta leite no estoque
var falta_leite = estoque.every(function(items) {
    return items.item != "leite";
});
console.log("Falta leite? " + falta_leite);

console.log("Uso do some\nExemplo 1:");
// Verificando se algum item é mais caro que 7 reais
var acima_valor_possuido = estoque.some(function(items) {
    return items.preco > 7;
});
console.log(acima_valor_possuido); // true

console.log("Uso do reduce\nExemplo 1:");
// Calculando o valor total dos itens no estoque
var soma = estoque.reduce(function(soma, items) {
    return soma + items.preco;
}, 0);
console.log(soma);

// Criando uma lista apenas com os nomes dos itens
var lista = estoque.reduce(function(lista_nova, items) {
    lista_nova.push(items.item);
    return lista_nova;
}, []);
console.log(lista);
