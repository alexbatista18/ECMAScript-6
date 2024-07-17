// Exemplo de uma aplicação de cálculo de figuras geométricas.
// Arquivo: 'circulo.js':
const PI = 3.14;

function calcularCircunferencia(raio) {
    return 2 * PI * raio;
}

function calcularArea(raio) {
    return PI * (raio ** 2);
}

export default calcularCircunferencia;
export { calcularArea, PI };

// Arquivo: 'matematica.js':
import calcularCircunferencia, { calcularArea, PI } from './circulo.js';

const raio = 5;
console.log(`Circunferência: ${calcularCircunferencia(raio)}`); // ~31.4
console.log(`Área: ${calcularArea(raio)}`); // ~78.5
console.log(`Valor de PI: ${PI}`); // 3.14
// Obs: exemplo do GPT.
