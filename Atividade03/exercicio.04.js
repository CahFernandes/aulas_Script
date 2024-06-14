// Data:  13/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 04 - Faça um algoritmo que leia 20 nomes dos usuários e sua cidade natal, e no final informe quantos moram em BH e quantos moram fora de BH.

const ler = require('readline-sync');

let x = 20;
let bh = 0;
let fora = 0;

for (let i = 0; i < x; i++) {
    let nome = ler.question("Informe um nome: ");    
    let cidade = ler.question("Informe a cidade de " + nome + ": ");

    cidade = cidade.toLowerCase();
    if(cidade === 'bh') {
        bh++;
    } else {
        fora++;
    }
}

console.log(`Das pessoas informadas, ${bh} moram em BH e ${fora} moram fora de BH.`);