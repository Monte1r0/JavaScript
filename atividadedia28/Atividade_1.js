const leia = require('readline-sync');

let primeironumero;
let ultimonumero;
let resultado = 0;

primeironumero = leia.questionInt("Digite o primeiro numero: ");
ultimonumero = leia.questionInt("Digite o segundo numero: ");

if (primeironumero > ultimonumero) {
    console.log("O primeiro número deve ser menor ou igual ao segundo número.");
} else {
    console.log("Números divisíveis por 3 e 5 no intervalo:");
    for (let num = primeironumero; num <= ultimonumero; num++) {
        if (num % 3 == 0 && num % 5 == 0) {
            console.log(`${num} é divisível por 3 e 5`);
            resultado++;
        }
    }
    
}
