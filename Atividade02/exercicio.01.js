// Data:  11/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 01 - Faça um algoritmo que leia o peso de uma pessoa na Terra e o número de um planeta (de acordo com a tabela abaixo). 
            // Depois, calcule e escreva o valor do peso dessa pessoa no planeta escolhido e o nome do planeta (peso no planeta = pesonaterra / 10 * gravidade). 
            // A relação de planetas e o valor das gravidades relativas à Terra são:
            // 1. Mercurio -> 0.37 
            // 2. Venus    -> 0.88
            // 3. Marte    -> 0.38
            // 4. Jupiter  -> 2.64
            // 5. Saturno  -> 1.15
            // 6. Urano    -> 1.17

const ler = require('readline-sync');

let pesoT = ler.questionInt("Informe seu peso: ");
let pesoP = 0;

console.clear();

console.log("Informe o planeta que deseja saber seu peso de acordo com as opções abaixo: ");
console.log(" 1.Mecúrio \n 2.Vênus \n 3.Marte \n 4.Júpter \n 5.Saturno \n 6.Urano");
let planeta = ler.questionInt("=> ");

switch (planeta) {
    case 1:
        pesoP = pesoT * 0.37;
        console.log(`O seu peso no planeta ${planeta} seria ${pesoP.toFixed(2)}`);
        break;

    case 2:
        pesoP = pesoT * 0.88;
        console.log(`O seu peso no planeta ${planeta} seria ${pesoP.toFixed(2)}`);
        break;

    case 3:
        pesoP = pesoT * 0.38;
        console.log(`O seu peso no planeta ${planeta} seria ${pesoP.toFixed(2)}`);
        break;

    case 4:
        pesoP = pesoT * 2.64;
        console.log(`O seu peso no planeta ${planeta} seria ${pesoP.toFixed(2)}`);
        break;

    case 5:
        pesoP = pesoT * 1.15;
        console.log(`O seu peso no planeta ${planeta} seria ${pesoP.toFixed(2)}`);
        break;

    case 6:
        pesoP = pesoT * 1.17;
        console.log(`O seu peso no planeta ${planeta} seria ${pesoP.toFixed(2)}`);
        break;

    default:
        console.log("Opção inválida!!!");
        break;
}
