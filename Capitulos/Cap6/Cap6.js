// Criando um mapa para o estoque de produtos
var estoque = new Map();

// Adicionando produtos ao estoque
estoque.set("maçã", 3.50);
estoque.set("banana", 2.00);
estoque.set("laranja", 4.00);
estoque.set("uva", 6.00);

// Recuperando o preço de um produto
console.log("Preço da maçã:", estoque.get("maçã")); // Preço da maçã: 3.50

// Verificando se um produto existe no estoque
console.log("Tem banana no estoque?", estoque.has("banana")); // Tem banana no estoque? true

// Removendo um produto do estoque
estoque.delete("banana");
console.log("Tem banana no estoque?", estoque.has("banana")); // Tem banana no estoque? false

// Exibindo o total de produtos no estoque
console.log("Total de produtos no estoque:", estoque.size); // Total de produtos no estoque: 3

// Limpando o estoque
estoque.clear();
console.log("Total de produtos no estoque após limpar:", estoque.size); // Total de produtos no estoque após limpar: 0

// Criando um WeakMap para armazenar informações de produtos
var informacoesProduto = new WeakMap();

// Criando elementos HTML representando produtos
var produto1 = document.createElement('div');
var produto2 = document.createElement('div');

// Associando informações ao produto
informacoesProduto.set(produto1, { nome: "maçã", preco: 3.50 });
informacoesProduto.set(produto2, { nome: "laranja", preco: 4.00 });

// Recuperando informações de um produto
console.log("Informações do produto 1:", informacoesProduto.get(produto1)); // Informações do produto 1: { nome: "maçã", preco: 3.50 }

// Verificando se temos informações sobre um produto
console.log("Tem informações sobre produto2?", informacoesProduto.has(produto2)); // Tem informações sobre produto2? true

// Removendo informações de um produto
informacoesProduto.delete(produto1);
console.log("Tem informações sobre produto1?", informacoesProduto.has(produto1)); // Tem informações sobre produto1? false
