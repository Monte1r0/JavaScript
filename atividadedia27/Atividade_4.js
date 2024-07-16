// Atividade 7

const leia = require('readline-sync');

let numero1;
let numero2;
let operação;

console.log("\n Olá seja bem vindo a Calcula Quase Tudo: ");

numero1 = leia.question("\nDigite o primeiro numero: ");
numero2 = leia.question("\nDigite o segundo numero: ");

console.log("\n A Seguir Nossas funções: ");
console.log("\n 1 -- Soma -- ");
console.log("\n 2 -- Subtração -- ");
console.log("\n 3 -- Multiplicação -- ");
console.log("\n 4 -- Divisão -- ");


codigo = leia.questionInt("\nDigite qual o código da operação: ");

switch(codigo){
    case 1:
        console.log(`A Soma do valor ${numero1} + ${numero2} é igual a = `, (numero1+numero2));
        break;
    case 2:
        console.log(`A subtração do valor ${numero1} - ${numero2} é igual a = `, (numero1-numero2));
        break;
    case 3:
        console.log(`A Multiplicação do valor ${numero1} x ${numero2} é igual a = `, (numero1*numero2));
        break;
    case 4:
        console.log(`A Divisão do valor ${numero1} / ${numero2} é igual a = `, (numero1/numero2));
        break;
    default:
        console.log('\nDigite um código válido!!!!!');
        break;
};