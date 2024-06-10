// Data:  10/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 18 -  Ler o nome de 2 times e o número de gols marcados na partida. 
              // Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

const ler = require('readline-sync');

let time1 = ler.question("Informe o nome do time da casa: ");
let time2 = ler.question("Informe o nome do time visitante: ");
let gols1 = ler.questionInt("Informe a quantidade de gols do " + time1 + ": ");
let gols2 = ler.questionInt("Informe a quantidade de gols do " + time2 + ": ");

if(gols1 > gols2) {
    console.log("O vencedor da partida é " + time1 + " que venceu a partida por " + gols1 + " x " + gols2);
} else if(gols2 > gols1) {
    console.log("O vencedor da partida é " + time2 + " que venceu a partida por " + gols2 + " x " + gols1);
} else {
    console.log("A partida terminou em EMPATE!");
}