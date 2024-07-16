const leia = require('readline-sync');

let vetorstring = [
    "Boxer",
    "Pastor Alemão",
    "Pinscher",
    "Husky Siberiano",
    "Corgi",
    "Caramelo",
    "Pitbull"
  ];

let numeros = Array(5)



for (let contador = 0; contador < vetorstring.length; contador++ ){
    console.log(`Posição[${contador}] = ${vetorstring[contador]}`)
}

for (let contador = 0; contador < numeros.length; contador++ ){
    numeros[contador] = leia.questionInt("Digite um numero: ")
}

console.table(numeros)
console.table(vetorstring.sort())

// // Código que pode ser usado no futuro para ordenar numeros em ordem (o vetorstring é a variavel que c escolheu) 
// Se em baixo vc colocar o .reverse() no final ele vai ficar em ordem decrescente 
// console.table(vetorstring.sort(compareAsc))



// // function compareAsc(a, b) {

//     return a - b;
  
//   }