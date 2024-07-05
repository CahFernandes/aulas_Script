// Data:  04/07/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 04 - Crie uma função que converta a velocidade de km/h para m/s.

const ler = require('readline-sync');

const DIVKM = 3.6;
let result  = 0;
let valKm   = 0;
let valMs   = 0;

function converteKm(valKm) {
    
    result = valKm / 3.6
    console.log(`O valor ${valKm} em Km/h equivale a ${result.toFixed(2)} m/s.`);
    console.log("");
}

function converteMs(valMs) {
    
    result = valMs * 3.6
    console.log(`O valor ${valMs} em m/s equivale a ${result} Km/h.`);
}

valKm = ler.questionInt("Informe o valor em Km/h para ser transformado em m/s: ")
converteKm(valKm);

valMs = ler.questionInt("Informe o valor em m/s para ser transformado em Km/h: ")
converteMs(valMs);
