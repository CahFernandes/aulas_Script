// Data:  13/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 05 - Faça um algoritmo que Leia várias idades e calcule a média entre as idades.

const ler = require('readline-sync');

let i = 1;
let soma, num, media,idade;
soma  = 0;
num   = 0;
media = 0;

do {
    soma += idade;
    idade = ler.questionInt(`Digite a idade ${i} ou -1 para sair: `);

    i++;
} while (idade != -1);

media = soma / i

console.log("A média entre as idades informadas é " + media + ".");