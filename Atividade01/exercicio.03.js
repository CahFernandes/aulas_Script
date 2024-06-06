// Data:  06/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 03 - Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se somar os dois, caso contrário multiplique A
//                           por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.

const ler = require('readline-sync');

let numA = ler.questionInt("Informe um valor: ");
let numB = ler.questionInt("Informe outro valor: ");

if(numA == numB) {
    let result = numA + numB;
    result = parseInt(result);

    console.log("A soma entre os dois valores é: " + result);
} else {
    let result = numA * numB;
    result = parseInt(result);

    console.log("A multiplicação entre os dois valores é: " + result);
}
 