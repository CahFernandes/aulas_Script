// Data:  13/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 05 - Faça um algoritmo que Leia várias idades e calcule a média entre as idades.

const ler = require('readline-sync');

let i = 0;
let soma, num, media,idade;
soma  = 0;
num   = 0;
media = 0;
idade = 0;

while (idade >= 0) {
    soma += idade;
    idade = ler.questionInt(`Digite a idade ${i} ou -1 para sair: `);   

    i++;
} 

media = soma / (i -1);

console.log("A média entre as idades informadas é " + media.toFixed(2) + ".");