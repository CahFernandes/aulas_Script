// Data:  06/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 01 - Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C

const ler = require('readline-sync');

let numA = ler.questionFloat("Informe o valor A: ");
let numB = ler.questionFloat("Informe o valor B: ");
let numC = ler.questionFloat("Informe o valor C: ");

if ((numA + numB) < numC) {
    console.log("O resultado da soma dos valores A (" + numA + ") e B (" + numB + ") é menor que o valor C (" + numC + ").");
} 