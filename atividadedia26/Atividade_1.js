const leia = require('readline-sync');

let salario;
let abono;

salario = leia.questionInt("Digite o seu salário: ");
console.log("O valor do salario é" + salario);
abono = leia.questionInt("Digite o valor do Abono: ");
console.log("O valor do salario é" + abono);

NovoSalário = salario + abono;

console.log("\nSeu novo salario é: " + NovoSalário);

if (NovoSalário < 1640) {
    console.log("Seu novo salario esta abaixo do salario minimo  ");
}  else {
    console.log("Seu novo salario esta acima do salario minimo  ")
};
