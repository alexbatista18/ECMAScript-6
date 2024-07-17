// Ideia para um estoque de loja
var set = new Set();
set.add('maçã');
set.add('banana');
set.add('maçã');
for (const item of set) {
    console.log(item); // 'maçã', 'banana'
}
// ou
var set = new Set(['maçã', 'banana', 'laranja']);

// Exemplo mais complexo
var estoque = new Set();
estoque.add('maçã');
estoque.add('banana');
estoque.add('laranja');
estoque.add('banana'); // Item duplicado, não será adicionado

console.log("Estoque atual:");
for (const item of estoque) {
    console.log(item); // 'maçã', 'banana', 'laranja'
}

estoque.delete('banana'); // Remove 'banana'
console.log("Estoque após remover 'banana':", estoque.size); // 2

estoque.clear(); // Limpa todo o estoque
console.log("Estoque após limpar:", estoque.size); // 0

// Exemplo de estoque com WeakSet
var weakSet = new WeakSet();
var produto1 = { nome: 'pão' };
var produto2 = { nome: 'leite' };

weakSet.add(produto1);
weakSet.add(produto2);

// Verifica se um produto está no WeakSet
console.log(weakSet.has(produto1)); // true

// Como o WeakSet não é iterável, não podemos listar os itens