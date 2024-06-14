// Data:  13/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 01 - Faça um algoritmo que imprima 15 vezes a frase "Hello World!"

const ler = require('readline-sync');

let num = 1;

while (num <= 15) {
    console.log(num + ". Hello World!");
    num++;
}