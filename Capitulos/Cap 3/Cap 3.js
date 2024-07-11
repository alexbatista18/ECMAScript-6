//Métodos auxiliares para array
//#Uso do forEach
//Declarando um array:
console.log("Uso do forEach\nExemplo 1:")
var lista_mercado = ['maçã', 'pera', 'laranja', 'uva', 'sucrilhos', 'biscoito', 'bolacha'];
//Chamando método forEach.
lista_mercado.forEach(function(item){
    console.log(item);
})

//Declarando função antes de chamar o método forEach
console.log("Uso do forEach\nExemplo 2:")
function mostrar_itens(item){
    console.log(item);
}
lista_mercado.forEach(mostrar_itens);

//ATENÇÃO: tomar cuidado ao incrimentar itens ao usar este método.
//ATENÇÃO: ISTO ESTÁ ULTRAPASSADO, deve ter corrigido nos próximos EMAS.
console.log("Uso do forEach\nExemplo 3:")
var lista_mercado = ['maçã', 'pera', 'laranja', 'uva', 'sucrilhos', 'biscoito', 'bolacha'];
var nova_lista = lista_mercado;
nova_lista.forEach(function(item){
    lista_mercado.push('talher');
    console.log(item);
});
//No exemplo anterior o método forEach vai iterar apenas pela lista antes de adicionar o item novo.
//Porém o item novo será adicionado a cada nova interação, neste caso 7 vezes.
console.log(lista_mercado);

console.log("Uso do map\nExemplo 1:");
var preco = [3, 4, 7, 4, 5, 6, 8];
var preco_desconto = preco.map(function(valor){
    return valor/2;
});
console.log(preco);
console.log(preco_desconto);

console.log("Uso do filter\nExemplo 1:");
var	estoque	=	[
    {item:'pão',	preco:6},
    {item:'uva',	preco:8},
    {item:'talher',	preco:10}
];
//Quero comprar algo mas só tenho 7 reais, o que eu posso comprar?
var	item_compravel	=	estoque.filter(function(items) {
    return	items.preco	<=	7; //Irá retorna apenas alunos maiores ou igual a 18 anos.
});
console.log(item_compravel);

console.log("Uso do find\nExemplo 1:");
//Quero saber se no estoque tem algum item do meu interesse.
var	item_interesse	=	estoque.find(function(items) {
    return	items.item	===	'talher';
});
console.log(item_interesse);

console.log("Uso do every\nExemplo 1:");
//Semelhante ao find, porém este retorna um valor boleano.
//Exemplo quero saber se no meu estoque faltam um item:
var	falta_leite	=	estoque.every(function(items){
    return	items.item	!=	"leite";		
});

console.log("Falta leite? " + falta_leite);

console.log("Uso do some\nExemplo 1:");
//Semelhante ao every, mas neste caso é utilizando para verificar se apenas um item satisfaz a condição
//Quero saber se algum item é mais caro que o dinheiro q eu tenho
var	acima_valor_possuido	=	estoque.some(function(items) {
		return	items.preco	>	7;
});
console.log(acima_valor_possuido);	//	true

console.log("Uso do reduce\nExemplo 1:");
//Usado para somatórios.
//Quero saber quato de valor líquido tenho no estoque:
soma	=	estoque.reduce(function(soma,items){
    return	soma	+	items.preco;
},	0)
console.log(soma);
//Posso também adicionar items a uma nova lista:
lista	=	estoque.reduce(function(lista_nova,items){
    lista_nova.push(items.item);
    return	lista_nova;
},	[])
console.log(lista);