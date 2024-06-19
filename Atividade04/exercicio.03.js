// Data:  18/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 03 - Crie um programa que peça ao usuário para digitar cinco elementos, adicione esses elementos a um array e depois exiba a quantidade de elementos no array.

const ler = require('readline-sync');

let elementos = [];

for (let i = 1; i <= 5; i++) {
    let elemento = ler.question(`Informe o ${i} elemento: `);
    elementos.push(elemento);
}

console.log('');
console.log(`Foram informados ${elementos.length} elementos.`);
