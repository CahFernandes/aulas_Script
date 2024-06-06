// Data:  06/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 04 - Faça um algoritmo que leia uma variável e some 8 caso seja par ou some 10 caso seja ímpar, imprimir o resultado desta operação.

const ler = require('readline-sync');

let num1 = ler.questionInt("Informe um número: ");

let resto = 0.0;
let result = 0;

resto = num1 % 2;
if(resto == 0) {
    result = num1 + 8;
} else {
    result = num1 + 10;
}

console.log("O resultado final é: " + result);