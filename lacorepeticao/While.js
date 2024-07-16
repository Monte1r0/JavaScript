const leia = require('readline-sync');

let numero, numero2, resultado;
let continua;

console.log("\n++++++++++++MENU++++++++++++");
continua=leia.keyInYNStrict("\nDeseja usar nossa calculador de some? ");
console.log("\n++++++++++++++++++++++++");

while(continua){
    numero = leia.questionInt("Digite o primeiro numero: ");
    numero2 = leia.questionInt("Digite o segundo numero: ");

    resultado = numero + numero2;
    console.log("o Resultado da soma é: " + resultado)
    console.log("\n++++++++++++++++++++++++");
    
    continua=leia.keyInYNStrict("\nDeseja continua a usar nossa calculador de some? ");
}