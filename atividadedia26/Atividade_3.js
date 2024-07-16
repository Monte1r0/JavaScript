const leia = require('readline-sync');

let SalarioBruto;
let AdicionalNoturno = 500;
let HorasExtras = 100;
let Horas;
let Desconto = 200;
let SalarioLiquido;

SalarioBruto = leia.questionInt("Digite o valor do seu salário: ");
Horas = leia.questionInt("Digite quantas horas extras você fez: ");

SalarioLiquido = SalarioBruto + AdicionalNoturno + (Horas*HorasExtras) - Desconto;

console.log("\nO valor do seu salário líquido é de: " + SalarioLiquido);