//Exemplo em que queremos ver a quantidade de um item em certo horário.
const horas = 20;
const produto = "laranja";
const quantidade = 50;

const mensagem = definirMensagem`${""}${horas} horas`;
function definirMensagem(strings, ...values) {
    const hora = values[1];

    if (hora >= 6 && hora <= 12) {
        values[0] = "Bom dia";
    } else if (hora > 12 && hora <= 18) {
        values[0] = "Boa tarde";
    } else {
        values[0] = "Boa noite";
    }

    values[0] = `${values[0]}, temos`;
    console.log(`${values[0]}${strings[1]}${quantidade} unidades de ${produto} disponíveis.`); // Método do livro, apresente erro.
    console.log(`${values[0]} ${quantidade} unidades de ${produto} estão no estoque.`); // Método correto (ao meu ver).
    return `${values[0]}${strings[0]}${quantidade} unidades de ${produto} estão disponíveis.`;
}
