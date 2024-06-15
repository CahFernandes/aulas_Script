// Data:  14/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 16 - Crie um programa que peça ao usuário para digitar uma frase e conte quantas vogais existem na frase.

const ler = require('readline-sync');
let vogal = 0;

let frase = ler.question("Informe uma frase: ");

frase = frase.toLowerCase();
let n = frase.length
for (let i = 0; i <= n; i++) {
   switch (frase[i]) {
    case 'a':
    case 'e':   
    case 'i':
    case 'o':
    case 'u':
        vogal++
        break;
   
    default:
        break;
   }    
}

console.log("Na frase informada teve " + vogal + " vogal(is).");