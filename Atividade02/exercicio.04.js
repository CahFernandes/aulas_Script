// Data:  11/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 04 -  Faça um programa que receba o valor da venda, escolha a condição de pagamento no menu e mostre o total da venda final conforme condições a seguir:
            // Venda a Vista - desconto de 10%
            // Venda a Prazo 30 dias - desconto de 5%
            // Venda a Prazo 60 dias - mesmo preço
            // Venda a Prazo 90 dias - acréscimo de 5%
            // Venda com cartão de débito - desconto de 8%

const ler = require('readline-sync');

let valor = ler.questionFloat("Informe o valor da venda: ");

console.log("------------- MENU OPÇÕES DE PAGAMENTO ----------------");
console.log(" 1. À vista \n 2. A Prazo (30 dias) \n 3. A Prazo (60 dias) \n 4. A Prazo (90 dias) \n 5. Cartão de Débito");
console.log("-------------------------------------------------------");
let opcao = ler.questionInt("=> ");
let total = 0;

switch (opcao) {
    case 1:
        total = valor -= valor * 0.10;
        console.log(`Realizando o pagamento a vista, o valor total a pagar é ${total.toFixed(2)}`);
        break;

    case 2:
        total = valor -= valor * 0.05;
        console.log(`Realizando o pagamento a prazo (30 dias), o valor total a pagar é ${total.toFixed(2)}`);        
        break;

    case 3:
        total = valor;
        console.log(`Realizando o pagamento a prazo (60 dias), o valor total a pagar é ${total.toFixed(2)}`);
        break;

    case 4:
        total = valor += valor * 0.05;
        console.log(`Realizando o pagamento a prazo (90 dias), o valor total a pagar é ${total.toFixed(2)}`);
        break;

    case 5:
        total = valor -= valor * 0.08;
        console.log(`Realizando o pagamento via cartão de Débito, o valor total a pagar é ${total.toFixed(2)}`);
        break;

    default:
        console.log("Opção invalida!!");
        break;
}
