// Exemplo simulando a verificação de estoque e atualização de itens em um mercado usando promises.
class Estoque {
    constructor() {
        this.itens = {
            arroz: 10,
            feijão: 5,
            macarrão: 8,
        };
    }

    verificarEstoque(produto) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.itens[produto] > 0) {
                    resolve(`Temos ${this.itens[produto]} unidades de ${produto} em estoque.`);
                } else {
                    reject(`O produto ${produto} está fora de estoque.`);
                }
            }, 1000); // Simula um atraso na consulta
        });
    }

    atualizarEstoque(produto, quantidade) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.itens[produto] !== undefined) {
                    this.itens[produto] += quantidade;
                    resolve(`Estoque de ${produto} atualizado. Novo total: ${this.itens[produto]}`);
                } else {
                    reject(`O produto ${produto} não existe no estoque.`);
                }
            }, 1000); // Simula um atraso na atualização
        });
    }
}

const mercado = new Estoque();

// Verificando estoque
mercado.verificarEstoque('arroz')
    .then((mensagem) => {
        console.log(mensagem);
        return mercado.atualizarEstoque('arroz', 5);
    })
    .then((mensagem) => {
        console.log(mensagem);
        return mercado.verificarEstoque('feijão');
    })
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
        console.log(`Erro: ${erro}`);
    });
