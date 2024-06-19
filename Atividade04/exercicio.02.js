// Data:  18/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 02 - Crie um programa que peça ao usuário para digitar cinco elementos e adicione esses elementos a um array. Depois, exiba o array.

const ler = require('readline-sync');

let elementos = [];

for (let i = 1; i <= 5; i++) {
    let elemento = ler.question(`Informe o ${i} elemento: `);
    elementos.push(elemento);
}


console.log('');
console.log(`Os elementos informados são:`);
for (let i = 0; i < elementos.length; i++) {
    console.log(`=> ${elementos[i]}`);
}
