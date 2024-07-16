const leia = require('readline-sync');

let numeros = Array(10);
let impares = [];
let pares = [];
let soma = 0;
let media;

for (let contador = 0; contador < numeros.length; contador++) {
    numeros[contador] = leia.questionInt("Digite um numero: ");
    if (numeros[contador] % 2 != 0) {
        impares.push(numeros[contador]);
    } else {
        pares.push(numeros[contador]);
    }
}

for (let contador = 0; contador < numeros.length; contador++) {
    soma += numeros[contador];
}

media = soma / numeros.length;

console.log("Números:", numeros);
console.log("Ímpares:", impares);
console.log("Pares:", pares);
console.log("Soma dos números:", soma);
console.log("Média dos números:", media);
