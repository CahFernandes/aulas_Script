// Estrutura de repetição DO WIHLE

const ler = require('readline-sync');

let soma, num;
soma = 0;
num  = 0;

do {
    soma += num;
    num = ler.questionInt("Digite um numero ou -1 para sair: ");

} while (num != -1);

console.log("A soma dos números digitados é " + soma + ".");