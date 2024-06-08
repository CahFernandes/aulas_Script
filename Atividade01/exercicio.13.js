// Data:  07/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 13 - Um posto está vendendo combustíveis com a seguinte tabela de descontos:
            // Álcool Até 25 litros, desconto de 2% por litro
            // Acima de 25 litros, desconto de 4% por litro
            // Gasolina Até 25 litros, desconto de 3% por litro
            // Acima de 25 litros, desconto de 5% por litro
            // Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina),
            // calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 5,86 e o preço do litro do álcool é R$ 4,70.

const ler = require('readline-sync');

let valor = 0.0;
let tipoC = ler.question("Informe o Tipo de Combustivel (A - alcool, G - gasolina): ").toUpperCase();
if(tipoC == "A" || tipoC == "G") {
    let litro = ler.questionFloat("Informe a quantidade de litros do combustivel: ");

    if(tipoC == "A") {
        valor = litro * 4.70;
        if(litro <= 25) {
            valor = valor - (valor * 0.02);
        } else {
            valor = valor - (valor * 0.04);
        }
    } else {
        valor = litro * 5.86;
        if(litro <= 25) {
            valor = valor - (valor * 0.03);
        } else {
            valor = valor - (valor * 0.05);
        }
    }
    console.log("O valor a ser pago é: " + valor.toFixed(2));
} else {
    console.log("O tipo informado não existe na tabela.");
}




