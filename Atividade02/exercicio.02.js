// Data:  11/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 02 - Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
            // Faça um programa que calcule o valor total a ser pago por uma pessoa. 
            // O programa deverá ler o valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).

const ler = require('readline-sync');

let valor = ler.questionFloat("Informe o valor total da Compra: ");
let codCliente = ler.questionInt("Informe o codigo do Cliente (1. Comum; 2. Funcionario; 3. VIP): ");
let total = 0;

switch (codCliente) {
    case 1:
        total = valor;
        console.log(`O valor total a ser pago é ${total.toFixed(2)}`);
        break;

    case 2:
        total = valor -= valor * 0.10;
        console.log(`O cliente teve um desconto de 10%, o valor total a ser pago é ${total.toFixed(2)}`);
        break;

    case 3:
        total = valor -= valor * 0.05;
        console.log(`O cliente teve um desconto de 5%, o valor total a ser pago é ${total.toFixed(2)}`);
        break;
    default:
        console.log("Opção do Código do Cliente inválida!");
        break;
}