// Data:  06/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 02 - Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos).

const ler = require('readline-sync');

let nome = ler.question("Informe o nome: ");
let sexo = ler.question("Informe o sexo (M/F): ");
let estadoc = ler.question("Informe o estado civil: ");

// estadoc = estadoc.toUpperCase();
// sexo  = sexo.toUpperCase();
// console.log(estadoc + sexo);

if(estadoc.toUpperCase() == "CASADA" && sexo.toUpperCase() == "F") {
    let tempo = ler.questionInt("Informe o tempo de casados (anos): ");
}
