// Exempplo de Proxy para validar as operações de um estoque.
const validadorEstoque = {
    set(alvo, propriedade, valor) {
        if (propriedade === 'preco' && typeof valor !== 'number') {
            throw new TypeError('O preço deve ser um número!');
        }
        if (propriedade === 'quantidade' && !Number.isInteger(valor)) {
            throw new TypeError('A quantidade deve ser um número inteiro!');
        }
        alvo[propriedade] = valor;
        return true;
    }
};

const produto = new Proxy({}, validadorEstoque);

// Adicionando informações do produto
produto.nome = 'Arroz';
produto.preco = 5.99;
produto.quantidade = 100;

console.log(`Produto: ${produto.nome}`);
console.log(`Preço: R$${produto.preco}`);
console.log(`Quantidade em estoque: ${produto.quantidade}`);

// Tentando atribuir valores inválidos
try {
    produto.preco = 'cinco reais'; // TypeError: O preço deve ser um número!
} catch (error) {
    console.log(error.message);
}

try {
    produto.quantidade = 10.5; // TypeError: A quantidade deve ser um número inteiro!
} catch (error) {
    console.log(error.message);
}
