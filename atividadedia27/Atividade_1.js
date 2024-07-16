// Atividade de Numero 3 //

const leia = require('readline-sync');

let nome;
let idade;
let doador;

nome = leia.question("\nDigite seu nome: ");

console.log(`\n Bem vindo/a ${nome} a central de doação de sangue.`);

idade = leia.questionInt("\nDigite sua idade: ");


if(idade > 18 && idade <= 59 ){
    console.log(`\n Olá ${nome}, parabens você está apto a doar sangue`)
}else if(idade > 59 && idade <= 69){
    doador = leia.question(`\n Você já doou sangue alguma vez, Sim ou Não?  ` )
    if(doador.toUpperCase() === "SIM"){
        console.log(`\n ${nome}, parabens você está apto a doar sangue`)   
    }else{
        console.log(`\n ${nome}, Infelizmente você não está apto a doar sangue`)
    };
}else{
    console.log(`\n ${nome}, Infelizmente você não está apto a doar sangue`)
};

