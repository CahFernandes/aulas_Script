// Data:  07/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 14 - Escreva um programa que leia uma letra e mostre se ela é vogal ou consoante.

const ler = require('readline-sync');

var vogal  = ["a","e","i","o","u"];
let possui = 0;
let letra  = ler.question("Informe uma letra: ");

for(var i = 0; i < vogal.length; i++) {
    if(vogal[i] === letra.toLowerCase()){
        possui = 1;
    }
}

if(possui == 1) {
    console.log("A letra informada é uma vogal");
} else {
    console.log("A letra informada é uma consoante");
}

