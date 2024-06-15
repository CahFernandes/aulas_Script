// Data:  14/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 15 - Crie um programa que peça ao usuário para digitar um número e imprima todos os divisores desse número

const ler = require('readline-sync');
let i = 0;

let num = ler.questionInt("Informe um numero: ");
i = num - 1;

while (i > 0) {
    if(num % i == 0) {
        console.log("O número informado é divisível por " + i);   
    }   
    i--; 
}
