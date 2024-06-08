// Data:  07/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 06 - O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 
//            A fórmula é IMC = peso / ( altura )2 Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.
//              IMC em adultos Condição
//              Abaixo de 18,5 Abaixo do peso
//              Entre 18,5 e 25 Peso normal
//              Entre 25 e 30 Acima do peso
//              Acima de 30 obeso

const ler = require('readline-sync');

let peso = ler.questionFloat("Informe seu peso: ");
let altura = ler.questionFloat("Informe sua altura: ");

let imc = 0.0;
imc = peso / (altura * 2);
imc = imc.toFixed(2);

if (imc < 18.5 ) {
    console.log(`De acordo com seu IMC (${imc}), você está Abaixo do Peso.`);
} else if(imc >= 18.5 && imc < 25) {
    console.log(`De acordo com IMC (${imc}), você está com o Peso Normal.`);
} else if(imc >= 25 && imc < 30) {
    console.log(`De acordo com IMC (${imc}), você está Acima do Peso.`);
} else {
    console.log(`De acordo com IMC (${imc}), você está Obeso.`);
}
