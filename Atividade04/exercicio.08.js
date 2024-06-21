// Data:  18/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 08 - Leia um array de 10 posições. Contar e escrever quantos valores pares ele possui.

const ler = require('readline-sync');

let numeros = [];
let pares   = 0;

for (let i = 1; i <= 10; i++) {
    let numero = ler.questionInt(`Informe o ${i} numero: `);
    numeros.push(numero);

    if(numero%2 == 0) {
        pares++;
    }
}
console.log(`Dos números informados, ${pares} são pares.`);


