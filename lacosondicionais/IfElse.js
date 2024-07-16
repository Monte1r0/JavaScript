const leia = require('readline-sync');

let nome;
let idade;

nome = leia.question("\nDigite seu nome: ");
idade = leia.questionInt("\nDigite sua idade: ");

if(idade >= 0 && idade <= 10){
    console.log('\nO seu Plano de saude custara r$ 100,00 por mes.');

}else if(idade <= 29) {
    console.log('\nO seu Plano de saude custara r$ 200,00 por mes.');
    
}else{
    console.log('\nO seu Plano de saude custara r$ 1000,00 por mes.');
}


if (nome.toUpperCase() === 'SAMUEL'){
    console.log(`\n Muuito obrigado ${nome} voce é muito bem vindo aqui `)
}