// Data:  14/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 12 - Jorge tem 1,72 metro e cresce 3 centímetros por ano, enquanto Roberto tem 1,65 metro e cresce 4 centímetros por ano. 
            // Construa um algoritmo que calcule e imprima quantos anos serão necessários para que Roberto seja maior que Jorge.

const ler = require('readline-sync');

let jorge = 1.72, roberto = 1.65;
let i = 0;
        
do {            
    
    roberto = roberto + 0.04;
    jorge = jorge + 0.03;
    
    i++;
} while (roberto <= jorge);

console.log("Para que Roberto seja maior que o Jorge, serão necessários " + i + " anos.");
                