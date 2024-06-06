// Data:  06/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 05 - Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente.

const ler = require('readline-sync');

let num1 = ler.questionInt("Informe um número: ");
let num2 = ler.questionInt("Informe outro número: ");
let num3 = ler.questionInt("Informe outro número: ");

if(num1 > num2) {
    if(num1 > num3) {
        if(num2 > num3) {
            console.log("Valores informados em ordem decrescente: " + num1 + num2 + num3);
        } else {
            console.log("Valores informados em ordem decrescente: " + num1 + num3 + num2);
        }
    } else {
        console.log("Valores informados em ordem decrescente: " + num3 + num1 + num2);
    }
    
} else {
    if(num1 > num3) {
        console.log("Valores informados em ordem decrescente: " + num2 + num1 + num3);
    } else {
        console.log("Valores informados em ordem decrescente: " + num2 + num3 + num1);
    }
}
