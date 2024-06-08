// Data:  07/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 10 - A prefeitura de Nova Lima abriu uma linha de crédito para os funcionários estatutários. 
            // O valor máximo da prestação não poderá ultrapassar 25% do salário bruto. 
            // Fazer um algoritmo que permita entrar com o salário bruto e o valor da prestação, e informar se o empréstimo pode ou não ser concedido

const ler = require('readline-sync');

let val_maximo = 0.0;
let salario = ler.questionFloat("Informe o salario do servidor: ");
let prestacao = ler.questionFloat("Informe o valor da prestação a ser paga: ");

val_maximo = (prestacao / salario).toFixed(2);

if(val_maximo > 0.25) {
    console.log("O valor da prestação está ACIMA do permitido (25%). O empréstimo NÃO será concedido.");
} else {
    console.log("O valor da prestação está ABAIXO do permitido (25%). O empréstimo será concedido.");
}

