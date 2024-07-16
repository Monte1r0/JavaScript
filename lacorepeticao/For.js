const leia = require('readline-sync');

let numero, numero2;
let contador;
let cont = 0;


for( contador = 1; contador <= 10; contador++ ){
    numero = leia.questionInt("Calcule a multiplicação de : ");
    numero2 = leia.questionInt("Vezes o numero: ");
    console.log(numero + "x" + numero2 + "=" + numero * numero2);

    if (numero % 2 == 0) {
        cont++
    }
}

console.log(cont + "vezes multiplos de numeros pares")