// Data:  18/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 09 - Ler um array com 10 nomes de pessoas, após pedir que o usuário digite um nome qualquer de pessoa. 
           // Escrever a mensagem “ACHEI”, se o nome estiver armazenado na tupla ou “NÃO ACHEI” caso contrário.

const ler = require('readline-sync');

let nomes = [];
let achei = false;

for (let i = 1; i <= 5; i++) {
    let nome = ler.question(`Informe o ${i} nome: `);
    nomes.push(nome);
}


console.log('');
let pessoa = ler.question("Informe o nome de uma pessoa: ")
for (let i = 0; i < nomes.length; i++) {
    if(nomes[i].toLocaleLowerCase() === pessoa.toLocaleLowerCase()) {
        achei = true;
    }        
}

if(achei) {
    console.log(`ACHEI!`);
} else {
    console.log(`NÃO ACHEI!`);
}