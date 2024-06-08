// Data:  07/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 15 - Uma empresa dá um prêmio aos funcionários que cumprem ou ultrapassam determinado valor de vendas de produtos. 
            // A cada funcionário foi estabelecido um valor a ser alcançado. 
            // Faça um algoritmo para ler o valor fixado e o valor de vendas de um funcionário, e imprimir a mensagem “Ganhou!”, se o funcionário tiver conseguido o prêmio, 
            // ou “Não ganhou!”, se não tiver conseguido.

const ler = require('readline-sync');

let valorFixo = ler.questionFloat("Informe o valor de vendas do mes: ");
let valorFunc = ler.questionFloat("Informe o valor de vendas do funcionario: ");

if(valorFunc >= valorFixo) {
    console.log("Ganhou!");
} else {
    console.log("Não Ganhou!");
}