// Data:  18/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 05 - Crie um programa que peça ao usuário para digitar seu nome e idade, crie um objeto com essas informações e depois exiba o objeto.

const ler = require('readline-sync');

let dados = {
    nome: "Fulano", 
    idade: 34
};

let nome  = ler.question("Informe seu nome: ");
let idade = ler.questionInt("Informe sua idade: ");

dados.nome = nome;
dados.idade = idade;

console.log(`O objeto criado com as informações foram - Nome: ${dados.nome}; Idade: ${dados.idade}`);

