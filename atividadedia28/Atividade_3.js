const leia = require('readline-sync');

let num;
let multiplos;
let continua = true;
let cont = 0;
do{
    num = leia.questionInt("Digite um numero Inteiro: ");
    if(num == 0){
        console.log("Finalizando programa.");
        continua = false;
    }else{
        if(num % 3 == 0){
            multiplos =+ num
            cont++
        }
    }
}while(continua);
console.log("\nA media de todos os numeros multiplos de 3 e:",   (multiplos / cont))
