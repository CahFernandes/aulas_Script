// Data:  07/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 08 - Construir um algoritmo que leia dois números e efetue a adição. Caso o valor somado seja maior que 20, este deverá ser apresentado
//            somando-se a ele mais 8; caso o valor somado seja menor ou igual a 20, este deverá ser apresentado subtraindo-se 5.

const ler = require('readline-sync');

let result = 0;
let num1 = ler.questionInt("Informe um numero: ");
let num2 = ler.questionInt("Informe outro numero: ");

result = num1 + num2;

if(result > 20) {
    result = result + 8;
} else {
    result = result - 5;
}

console.log("O resultado do cálculo é: " + result);
