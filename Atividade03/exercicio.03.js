// Data:  13/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 03 - Faça um algoritmo que leia 10 números e no final mostre a quantidade de números maiores que 5 e os números menores que 5.

const ler = require('readline-sync');
let i = 0;
let menor5 = 0;
let maior5 = 0;

do {
    i++;
    let num = ler.questionInt("Informe o numero de indice " + i + ": "); 

    if(num < 5) {
        menor5++;
    } else {
        maior5++; 
    }
} while (i < 10);

console.log(`Foi digitado ${menor5} números menores que 5 e ${maior5} números maiores que 5.`);


