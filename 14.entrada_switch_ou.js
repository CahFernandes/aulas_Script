// Entrada de opções usando consicional OU no Switch Case

const ler = require('readline-sync');

let porta = ler.question("Escolha uma porta: A - B - C ou D: ");

switch (porta) {
    case 'A':
    case 'a':
        console.log("A porta A foi aberta!");
        break;

    case 'B':
    case 'b':
        console.log("A porta B foi aberta!");

    case 'C':
    case 'c':
        console.log("A porta C foi aberta!");

    case 'D':
    case 'd':
        console.log("A porta D foi aberta!");        

    default:
        console.log("Nenhuma porta foi aberta!");
        break;
}

