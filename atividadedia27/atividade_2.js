// Atividade 4 //


const leia = require('readline-sync');

let nome;
let etapa1, etapa2, etapa3, etapa4, etapa5, etapa6, etapa7, etapa8; 

nome = leia.question("\nDigite seu nome: ");

console.log(`\n Bem vindo/a ${nome} ao nosso jogo.`);

console.log(`\n Escolha um animal dos que vou listar a seguir mas não me fale qual.`);
console.log("--Águia--");
console.log("--Pomba--");
console.log("--Homem--");
console.log("--Vaca--");
console.log("--Pulga--");
console.log("--Lagarta--");
console.log("--Sanguessuga--");
console.log("--Minhoca--");

console.log("\nPronto, agora que você já escolheu vamos lá!");

etapa1 = leia.question("\n O animal que você escolheu é Invertebrado ou Vertebrado?:  ");
if (etapa1.toUpperCase() === "VERTEBRADO") {
    etapa2 = leia.question("\n O animal que você escolheu é Ave ou Mamifero?:  ");
    if (etapa2.toUpperCase() === "AVE") {
        etapa3 = leia.question("\n O animal que você escolheu é Carnivoro ou Onivoro?:  ");
        if (etapa3.toUpperCase() === "CARNIVORO") {
            console.log(`\n HEHEHE o animal que você escolheu ${nome} Foi a Águia`);
        } else if (etapa3.toUpperCase() === "ONIVORO") {
            console.log(`\n HEHEHE o animal que você escolheu ${nome} Foi a Pomba`);
        } else {
            console.log(`\n Você ${nome} digitou algo errado`);
        }
    } else if (etapa2.toUpperCase() === "MAMIFERO") {
        etapa4 = leia.question("\n O animal que você escolheu é Onivoro ou Herbivoro?:  ");
        if (etapa4.toUpperCase() === "ONIVORO") {
            console.log(`\n HEHEHE o animal que você escolheu ${nome} Foi o Homem`);
        } else if (etapa4.toUpperCase() === "HERBIVORO") {
            console.log(`\n HEHEHE o animal que você escolheu ${nome} Foi a Vaca`);
        } else {
            console.log(`\n Você ${nome} digitou algo errado`);
        }
    } else {
        console.log(`\n Você ${nome} digitou algo errado`);
    }
} else if (etapa1.toUpperCase() === "INVERTEBRADO") {
    etapa5 = leia.question("\n O animal que você escolheu é Inseto ou Anelideo?:  ");
    if (etapa5.toUpperCase() === "INSETO") {
        etapa6 = leia.question("\n O animal que você escolheu é Hematofago ou Herbivoro?:  ");
        if (etapa6.toUpperCase() === "HEMATOFAGO") {
            console.log(`\n HEHEHE o animal que você escolheu ${nome} Foi a Pulga`);
        } else if (etapa6.toUpperCase() === "HERBIVORO") {
            console.log(`\n HEHEHE o animal que você escolheu ${nome} Foi a Lagarta`);
        } else {
            console.log(`\n Você ${nome} digitou algo errado`);
        }
    } else if (etapa5.toUpperCase() === "ANELIDEO") {
        etapa8 = leia.question("\n O animal que você escolheu é Hematofago ou Onivoro?:  ");
        if (etapa8.toUpperCase() === "HEMATOFAGO") {
            console.log(`\n HEHEHE o animal que você escolheu ${nome} Foi a Sanguessuga`);
        } else if (etapa8.toUpperCase() === "ONIVORO") {
            console.log(`\n HEHEHE o animal que você escolheu ${nome} Foi a Minhoca`);
        } else {
            console.log(`\n Você ${nome} digitou algo errado`);
        }
    } else {
        console.log(`\n Você ${nome} digitou algo errado`);
    }
} else {
    console.log(`\n Você ${nome} digitou algo errado`);
}
