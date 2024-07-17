// Estoque de mercado
const estoque = [
    { nome: 'Maçã', quantidade: 10 },
    { nome: 'Banana', quantidade: 5 },
    { nome: 'Laranja', quantidade: 8 },
    { nome: 'Uva', quantidade: 12 },
    { nome: 'Pera', quantidade: 0 }
];

// Usando for...of para listar os itens do estoque
console.log('Itens no estoque:');
for (const item of estoque) {
    console.log(`${item.nome}: ${item.quantidade}`);
}

// Usando for...in para listar as propriedades de um item
console.log('\nDetalhes do primeiro item:');
for (const propriedade in estoque[0]) {
    console.log(`${propriedade}: ${estoque[0][propriedade]}`);
}

// Usando break para parar a iteração quando encontrar um item com quantidade zero
console.log('\nListando itens até encontrar um item esgotado:');
for (const item of estoque) {
    if (item.quantidade === 0) {
        console.log('Item esgotado encontrado, interrompendo a listagem.');
        break;
    }
    console.log(`${item.nome}: ${item.quantidade}`);
}

// Usando continue para pular itens esgotados
console.log('\nItens disponíveis no estoque:');
for (const item of estoque) {
    if (item.quantidade === 0) {
        continue;
    }
    console.log(`${item.nome}: ${item.quantidade}`);
}

// Aplicação com um seletor de preços fictício
const precos = {
    'Maçã': 1.5,
    'Banana': 1.2,
    'Laranja': 1.0,
    'Uva': 2.5,
    'Pera': 2.0
};

console.log('\nPreço dos itens disponíveis:');
for (const item of estoque) {
    if (item.quantidade > 0) {
        console.log(`${item.nome}: $${precos[item.nome]}`);
    }
}
