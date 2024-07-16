const leia = require('readline-sync');

let idade;
let menores = 0;
let maiores = 0;

console.log("\n++++++++++++CONTADOR DE IDADE++++++++++++");

while(true){
    idade = leia.questionInt("Digite a idade: ");
    if(idade < 0){
        console.log("Finalizando programa.");
        break;
    }else{
        if(idade < 21){
            menores++
        }else if(idade > 50){
            maiores++
        }
    }
};

console.log(` A quantidade de pessoas menores de 21 foi de ${menores} e a quandidade de maiores de 50 foi ${maiores}`);