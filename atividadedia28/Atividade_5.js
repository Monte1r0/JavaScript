const leia = require('readline-sync');

let matrizNotas = Array(10);
let medias = Array(10);

for (let indiceLinha = 0; indiceLinha < matrizNotas.length; indiceLinha++) {
    matrizNotas[indiceLinha] = Array(4);
}

for (let indiceLinha = 0; indiceLinha < matrizNotas.length; indiceLinha++) {
    for (let indiceColuna = 0; indiceColuna < matrizNotas[indiceLinha].length; indiceColuna++) {
        matrizNotas[indiceLinha][indiceColuna] = leia.questionFloat(`Digite a nota do aluno ${indiceLinha + 1} para o ${indiceColuna + 1}º bimestre: `);
    }
}

for (let indiceLinha = 0; indiceLinha < matrizNotas.length; indiceLinha++) {
    let soma = 0;
    for (let indiceColuna = 0; indiceColuna < matrizNotas[indiceLinha].length; indiceColuna++) {
        soma += matrizNotas[indiceLinha][indiceColuna];
    }
    medias[indiceLinha] = soma / matrizNotas[indiceLinha].length;
}

console.log("\nA média dos alunos são:");
for (let i = 0; i < medias.length; i++) {
    console.log(`Aluno ${i + 1}: ${medias[i].toFixed(2)}`);
}

console.table(matrizNotas);
