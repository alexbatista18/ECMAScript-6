// Iteradores e iteráveis

// Criando um iterador para um estoque com um único item
var estoqueUnico = ['laranja'][Symbol.iterator]();
console.log(estoqueUnico.next());
// Saída: { value: 'laranja', done: false }

// Chamando next novamente, o iterador não terá mais valores
console.log(estoqueUnico.next());
// Saída: { value: undefined, done: true }

// Outra forma de iterar usando um array de estoque
var estoque = ['maçã', 'pera', 'laranja', 'uva', 'sucrilhos', 'biscoito', 'bolacha'];

// Obtendo o iterador do array de estoque
var iterador = estoque[Symbol.iterator]();
var done = false;
var proximo = iterador.next();

// Usando um loop do...while para iterar sobre os itens do estoque
do {
    var item = proximo.value;
    console.log(item);
    proximo = iterador.next();
} while (!proximo.done);

// Saída:
// maçã
// pera
// laranja
// uva
// sucrilhos
// biscoito
// bolacha
