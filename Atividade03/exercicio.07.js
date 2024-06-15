// Data:  14/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 07 -  Faça um algoritmo que leia 15 produtos e seu respectivos valores, e no final mostre o valor total dos valores, o produto mais caro e o mais barato.

const ler = require('readline-sync');

let produto, valor, valorMenor, valorMaior;
valor      = 0;
valorMenor = 0;
valorMaior = 0;
valorTotal = 0;

for (let i = 1; i <= 15; i++) {
    
    produto = ler.question("Informe o produto " + i + ": ");
    valor = ler.questionFloat("Informe o valor do " + produto + ": ");

    if(valor < valorMenor || valorMenor == 0) {
        valorMenor = valor;
    }    

    if(valor > valorMaior){
        valorMaior = valor;
    }   

    valorTotal = valor += valorTotal
}

console.log("O valor total dos produtos informados foi R$" + valorTotal.toFixed(2) + ", sendo o menor valor de R$" + valorMenor.toFixed(2) + " e o de maior valor de R$" + valorMaior.toFixed(2));

