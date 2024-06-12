// Data:  11/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 03 -  Faça um programa, utilizando estrutura de condição, que receba um número real, digitado pelo usuário e mostre o menu para selecionar o tipo de cálculo que deve ser realizado:
            // 101 - Raiz quadrada
            // 102 - A metade
            // 103 - 10% do número
            // 104 - O dobro

const ler = require('readline-sync');

console.log("Informe um número: ");
let valor = ler.questionFloat("=> ");

console.log("------------- MENU OPÇÕES DE CÁLCULO ----------------");
console.log(" 101. Raiz quadrada \n 102. A metade \n 103. 10% do número \n 104. O dobro");
console.log("-----------------------------------------------------");
let opcao = ler.questionInt("=> ");
let result = 0;

switch (opcao) {
    case 101:
        result = valor * valor;
        console.log(`A raizz quadrada do número informado (${valor}) é ${result}`);
        break;

    case 102:
        result = valor / 2;
        console.log(`A metade do número informado (${valor}) é ${result}`);
        break;

    case 103:
        result = valor * 0.10;
        console.log(`10% do número informado (${valor}) é ${result}`);
        break;        

    case 104:
        result = valor * 2;
        console.log(`O dobro do número informado (${valor}) é ${result}`);
        break;                

    default:
        console.log("Opção inválida!!");
        break;
}



