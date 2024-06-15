// Data:  14/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 10 - Faça um algoritmo que leia vários números inteiros e calcule o somatório dos números negativos. O fim da leitura será indicado pelo número (0)

const ler = require('readline-sync');

let i    = 1;
let soma = 0;

do {
    num = ler.questionInt("Informe o numero " + i + ": ");
    if(num === 0 ) {
        break;
    }

    if(num < 0) {
        soma = soma + num;
    }
    
    i++;
} while (num != '0');

console.log("O somatório de números negativos foi: " + soma);