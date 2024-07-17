// Vamos usar arrow functions para gerenciar os itens de um estoque de mercado:
const estoque = {
    itens: [
        { nome: 'maçã', quantidade: 10 },
        { nome: 'banana', quantidade: 5 },
        { nome: 'laranja', quantidade: 8 },
    ],
    listarItens: function() {
        this.itens.forEach(item => {
            console.log(`${item.nome}: ${item.quantidade} unidades`);
        });
    },
    adicionarItem: (nome, quantidade) => {
        estoque.itens.push({ nome, quantidade });
        console.log(`Adicionado: ${nome}, Quantidade: ${quantidade}`);
    }
};

// Listar os itens do estoque
estoque.listarItens();

// Adicionar um novo item
estoque.adicionarItem('uva', 12);
estoque.listarItens();