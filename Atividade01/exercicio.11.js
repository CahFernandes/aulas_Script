// Data:  07/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 11 - Escreva um algoritmo que leia um número e informe se ele é divisível por 10, por 5 ou por 2 ou se não é divisível por nenhum deles.

const ler = require('readline-sync');

let div10 = 0.0;
let div5  = 0.0;
let div2  = 0.0; 

let num = ler.questionInt("Informe um numero: ");

div10 = num%10;
div5  = num%5;
div2  = num%2;

if(div10 == 0) {
    console.log("O número informado é divisível por 10, por 5 e por 2.");
} else {
    if(div5 == 0) {
        console.log("O número informado é divisível por 5");
    } else {
        if(div2 == 0){
            console.log("O número informado é divisível por 2");
        } else {
            console.log("O número informado não é divisível por 10, nem por 5, nem por 2");
        }
    }
}