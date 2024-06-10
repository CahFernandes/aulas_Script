// Data:  10/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 17 -  Escreva um algoritmo que leia as idades de 2 homens e 2 mulheres (considere que as idades dos homens serão sempre diferentes, bem como as das mulheres).
                          //  Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha

const ler = require('readline-sync');

let homem1 = ler.questionInt("Informe a idade do primeiro homem: ");
let homem2 = ler.questionInt("Informe a idade do segundo homem: ");
let mulher1 = ler.questionInt("Informe a idade da primeira mulher: ");
let mulher2 = ler.questionInt("Informe a idade da segunda mulher: ");

let mulherV = 0;
let mulherN = 0;
let somaM   = 0;

let homemV = 0;
let homemN = 0;
let somaH  = 0;

if(mulher2 > mulher1) {
    mulherV = mulher2;
    mulherN = mulher1;
} else {
    mulherV = mulher1;
    mulherN = mulher2;
}

if(homem1 > homem2) {
    homemV = homem1;
    homemN = homem2;
} else {
    homemV = homem2;
    homemN = homem1;
}

somaH = homemV + mulherN;
somaM = homemN * mulherV;

console.log("A soma da idade do Homem mais Velho com a Mulher mais nova é " + somaH + ".");
console.log("O produto da idade da Mulher mais Velha com o Homem mais novo é " + somaM + ".");

