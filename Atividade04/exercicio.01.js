// Data:  18/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 01 - Crie um programa que peça ao usuário para digitar cinco números, adicione esses números a um array e depois exiba o maior número no array.

const ler = require('readline-sync');

let numeros = [];
let maior   = 0;

for (let i = 1; i <= 5; i++) {
    let numero = ler.questionInt(`Informe o ${i} numero: `);

    if(numero > maior){
        maior = numero
    }
    numeros.push(numero);
}

console.log(`O maior número entre os informados é: ${maior}.`);
