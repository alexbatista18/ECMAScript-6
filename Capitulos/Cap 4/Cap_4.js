//Iteradores e iteraveis
var estoque = ['laranja'][Symbol.iterator]();;
console.log(estoque.next());
//Vai aparecer done = false
console.log(estoque.next());
//Aqui vai aparecer done = true sinalizando que iterou.
//Outra forma de iterar sem usar o for:
var estoque = ['maçã', 'pera', 'laranja', 'uva', 'sucrilhos', 'biscoito', 'bolacha'];

var	iterador	=	estoque[Symbol.iterator]();
var	done	=	false;
var	proximo	=	iterador.next();
do	{
	var	item	=	proximo.value;
	console.log(item);
	proximo	=	iterador.next();
}	while	(!proximo.done);