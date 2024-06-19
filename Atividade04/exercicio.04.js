// Data:  18/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 04 - Crie um programa que peça ao usuário para digitar cinco elementos, adicione esses elementos a um array e depois peça ao usuário para digitar um elemento para contar quantas vezes esse elemento aparece no array.

const ler = require('readline-sync');

let elementos = [];
let qtde = 0;

for (let i = 1; i <= 5; i++) {
    let elemento = ler.question(`Informe o ${i} elemento: `).toLowerCase();
    elementos.push(elemento);
}

console.log('');
let dado = ler.question("Informe um elemento: ").toLowerCase();
for (let i = 0; i < elementos.length; i++) {
    if(elementos[i] === dado)    {
        qtde++;
    }    
}

console.log(`O elemento ${dado} foi informado ${qtde} vezes no array.`);

