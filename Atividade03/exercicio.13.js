// Data:  14/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 13 - Escreva um algoritmo que gere a saída abaixo:

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********

const ler = require('readline-sync');
let asterisco = '*';

while(asterisco != '*********' ){
    console.log(asterisco);
    asterisco = asterisco + '*';
}
console.log(asterisco);

