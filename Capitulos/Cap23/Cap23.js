// Imagine que recebemos o estoque de uma loja por uma API
// GET /products - Retorna uma lista de todos os produtos.
// GET /products/:id - Retorna os detalhes de um produto específico.
// Função para buscar todos os produtos
async function fetchAllProducts() {
    try {
        const response = await fetch('https://api.example.com/products');
        if (!response.ok) {
            throw new Error('Erro ao buscar produtos');
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para buscar os detalhes de um produto específico
async function fetchProductDetails(productId) {
    try {
        const response = await fetch(`https://api.example.com/products/${productId}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar detalhes do produto');
        }
        const product = await response.json();
        return product;
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função principal para mostrar produtos e seus detalhes
async function showStoreInventory() {
    try {
        // Buscando todos os produtos
        const products = await fetchAllProducts();
        if (products && products.length > 0) {
            for (const product of products) {
                console.log(`Produto: ${product.name} - Preço: ${product.price}`);
                
                // Buscando detalhes do produto
                const details = await fetchProductDetails(product.id);
                console.log(`Detalhes: ${details.description}, Quantidade em estoque: ${details.stock}`);
            }
        } else {
            console.log('Nenhum produto encontrado no estoque.');
        }
    } catch (error) {
        console.error('Erro ao mostrar o inventário da loja:', error);
    }
}

// Chamar a função principal para exibir o inventário
showStoreInventory();
