// Data:  18/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 07 - Faça um programa que leia um array de 10 posições para números inteiros. 
          //  Depois de armazenar os valores, em um menu se digitar zero, finalize o programa;
         //   se for 1, mostre a lista na ordem direta;
         //   se for 2, mostre a lista na ordem inversa;
         //   se for 3 mostrar a soma total dos valores.
         //   Caso, o número for diferente de 1, 2 e 3 escreva uma mensagem informando que o código é inválido.

const ler = require('readline-sync');

let numeros = [];
let soma    = 0;

for (let i = 0; i < 9; i++) {
    let numero = ler.questionInt(`Informe o ${i} numero: `);
    numeros.push(numero);
}

console.log("----------- Menu de Opções --------------");
console.log("1. Mostrar a lista na ordem direta       ");
console.log("2. Mostrar a lista na ordem inversa      ");
console.log("3. Mostrar a soma total dos valores      ");
let opcao = ler.questionInt("=> ");

switch (opcao) {
    case 1:
        console.log(`Lista em ordem direta: ${numeros}`);
        break;

    case 2:
        console.log(`Lista em ordem inversa:`);    
        for (let i = numeros.length - 1; i >= 0; i--) {
            console.log(numeros[i]);       
        }        
        break;

    case 3:
        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];           
        }
        console.log(`A soma dos números informados é: ${soma}`);
        break;
    default:
        console.log("Código informado inválido!");
        break;
}


