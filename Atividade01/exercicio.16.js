// Data:  10/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 16 - Uma empresa paga a seus funcionários R$ 5,00 de comissão para cada produto vendido, entretanto, se forem vendidos mais de 200 produtos, o valor aumenta para R$ 7,50.
            // Se a quantidade for superior a 450 produtos, o valor da comissão sobe para R$ 10,00. 
            // Monte um programa para ler o nome de um funcionário e a quantidade de produtos que ele vendeu. 
            // Exiba o nome do funcionário e o total de comissão que ele vai receber.

const ler = require('readline-sync');

let comissao = 0.0;
let nome     = ler.question("Informe o nome do funcionario: ");
let vendas   = ler.questionInt("Informe a quantidade de produtos que o " + nome + " vendeu: ");

if(vendas <= 200) {
    comissao = vendas * 5;
} else if(vendas > 200 && vendas <= 450) {
    comissao = vendas * 7.5;
} else {
    comissao = vendas * 10;
}

console.log("O funcionário", nome, "vendeu", vendas, "produtos e receberá R$", parseFloat(comissao).toFixed(2), "de comissão." );

