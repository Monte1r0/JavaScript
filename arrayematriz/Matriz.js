const leia = require('readline-sync');

let matrizInteiro = Array(3);

for (let indiceLinha = 0; indiceLinha < matrizInteiro.length; indiceLinha++){
    matrizInteiro[indiceLinha] = Array(3);
}

for (let indiceLinha = 0; indiceLinha < matrizInteiro.length; indiceLinha++ ){
    
    for (let indiceColuna = 0; indiceColuna < matrizInteiro.length; indiceColuna++ ){
       
        matrizInteiro[indiceLinha][indiceColuna] = leia.questionInt(`Digite um numero da posição ${indiceLinha} e ${indiceColuna} `)
    }
}

console.table(matrizInteiro)