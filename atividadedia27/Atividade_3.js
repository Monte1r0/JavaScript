// Atividade 5 //
const leia = require('readline-sync');

let lanche;
let quantidade;

console.log("\n Olá seja Muito Bem Vindo à Lanchonete do Samuca");

console.log("\n A Seguir Nosso Cardápio: ");

console.log("\n 1 -- Cachorro Quente -- ");
console.log("  -- R$ 10.00 -- ");
console.log("\n 2 -- X-Salada -- ");
console.log(" -- R$ 15.00 -- ");
console.log("\n 3 -- X-Bacon -- ");
console.log(" -- R$ 18.00 -- ");
console.log("\n 4 -- Bauru -- ");
console.log(" -- R$ 12.00 -- ");
console.log("\n 5 -- Refrigerante -- ");
console.log(" -- R$ 8.00 -- ");
console.log("\n 6 -- Suco de Laranja -- ");
console.log(" -- R$ 13.00 -- ");

lanche = leia.questionInt("\nDigite qual o código do lanche que você gostaria: ");
quantidade = leia.questionInt("Digite a quantidade: ");

switch (lanche) {
    case 1:
        console.log('\nO Total do seu pedido foi de R$:' + (quantidade * 10));
        break;
    case 2:
        console.log('\nO Total do seu pedido foi de R$:' + (quantidade * 15));
        break;
    case 3:
        console.log('\nO Total do seu pedido foi de R$:' + (quantidade * 18));
        break;
    case 4:
        console.log('\nO Total do seu pedido foi de R$:' + (quantidade * 12));
        break;
    case 5:
        console.log('\nO Total do seu pedido foi de R$:' + (quantidade * 8));
        break;
    case 6:
        console.log('\nO Total do seu pedido foi de R$:' + (quantidade * 13));
        break;
    default:
        console.log('\nDigite um código válido!!!!!');
        break;
};
