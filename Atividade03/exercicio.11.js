// Data:  14/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 11 - Escreva um algoritmo que calcule a média dos números digitados pelo usuário, se eles forem pares. Termine a leitura se o usuário digitar zero (0).

const ler = require('readline-sync');

let i     = 1;
let soma  = 0;
let media = 0;
let qtdP  = 0;

do {
    num = ler.questionInt("Informe o numero " + i + ": ");
    if(num === 0 ) {
        break;
    }

    if((num%2) == 0) {
        soma = soma + num;
        qtdP++; 
    }
        
    i++;
} while (num != '0');

media = soma / qtdP;

console.log("A média dos números pares foi: " + media.toFixed(2));