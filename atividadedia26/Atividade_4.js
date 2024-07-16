const leia = require('readline-sync');

let Numero1;
let Numero2;
let Numero3;
let Numero4;

Numero1 = leia.questionInt("Digite o numero 1: ");
console.log(Numero1);
Numero2 = leia.questionInt("Digite o numero 2: ");
console.log(Numero2);
Numero3 = leia.questionInt("Digite o numero 3: ");
console.log(Numero3);
Numero4 = leia.questionInt("Digite o numero 4: ");
console.log(Numero4);

Calculo = (Numero1 * Numero2) - (Numero3 * Numero4);

console.log("\nA diferença é igual a: " + Calculo);