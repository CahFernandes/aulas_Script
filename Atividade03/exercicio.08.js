// Data:  14/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 08 - Faça um algoritmo que leia 18 números e no final mostre a soma dos números e se soma for maior que 500, subtraia 100 do valor total.

const ler = require('readline-sync');

let num, soma;
num  = 0;
soma = 0;

for (let i = 1; i <= 18; i++) {
    
    num = ler.questionInt("Informe o numero " + i + ": ");
    soma = soma += num
}

if(soma > 500) {
    soma = soma - 100
    console.log("A soma dos números informados subtraindo 100 do total é: " + soma);
} else {
    console.log("A soma total dos números informados é: " + soma);
}


