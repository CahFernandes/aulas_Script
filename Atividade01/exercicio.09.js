// Data:  07/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 09 - Escreva um algoritmo que receba um número e imprima uma das mensagens: “é múltiplo de 3” ou “não é múltiplo de 3”.

const ler = require('readline-sync');

var multiplo = 0.0;
let num = ler.questionInt("Informe um numero: ");


multiplo = num % 3;
if(multiplo > 0) {
    console.log("O número informado NÂO é multiplo de 3!");
} else {
    console.log("O número informado é multiplo de 3!");
}
