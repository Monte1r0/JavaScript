const leia = require('readline-sync');

let Nota1;
let Nota2;
let Nota3;
let Nota4;

Nota1 = leia.questionInt("Digite a nota 1: ");
Nota2 = leia.questionInt("Digite a nota 2: ");
Nota3 = leia.questionInt("Digite a nota 3: ");
Nota4 = leia.questionInt("Digite a nota 4: ");

media = (Nota1 + Nota2 + Nota3 + Nota4)/4;

console.log("\nA média total foi de: ", media.toFixed(1));

if (media < 6) {
    console.log("O aluno conseguiu se desenvolver bem  ")
}  else {
    console.log("O aluno não conseguiu se desenvolver bem  ")
};

