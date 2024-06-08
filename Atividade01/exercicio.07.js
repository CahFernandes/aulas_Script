// Data:  07/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 07 - Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
//             Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. Código Condição de pagamento
            // À vista em dinheiro ou cheque, recebe 10% de desconto.
            // À vista no cartão de crédito, recebe 15% de desconto.
            // Em duas vezes, preço normal de etiqueta mais juros de 10%.

const ler = require('readline-sync');

let valor = 0.0;
let preco = ler.questionFloat("Informe o valor do produto: ");
console.log("");

console.log("Tabela de CONDIÇÃO DE PAGAMENTO");
console.log("1. À vista em dinheiro ou cheque");
console.log("2. À vista no cartão de crédito");
console.log("3. De duas vezes no cartão de crédito");
let tipo_pag = ler.questionInt("Informe o tipo de pagamento de acordo com a tabela acima: ");

if(tipo_pag == 1) {
    valor = preco - (preco * 0.10);
} else if(tipo_pag == 2) {
    valor = preco - (preco * 0.15);
} else {
    valor = preco + (preco * 0.10);
}

console.log("O valor total a ser pago é:", valor );


