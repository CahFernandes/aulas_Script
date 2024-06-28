// Data:  27/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 03 - Ler um array de 10 elementos inteiros e positivos. 
            // Criar um segundo array da seguinte forma: os elementos de índice par receberão os respectivos elementos divididos por 2;  
            // os elementos de índice ímpar receberão os respectivos elementos multiplicados por 3. Imprima os dois arrays.

let numeros = [3, 5, 10, 66, 40, 55, 13, 27, 12, 99];
let numeros_div = [];
let elemento;
let valor = 0;
let i = 0;

for (let i = 0; i < numeros.length; i++) {
    if((i%2) == 0) {
        elemento = "par";
        valor    = numeros[i] / 2;
    } else {
        elemento = "impar";
        valor    = numeros[i] * 3;
    }   
    numeros_div[i] = {elemento: numeros[i], valor: valor};
};

console.table(numeros);
console.table(numeros_div);