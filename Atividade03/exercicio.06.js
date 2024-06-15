// Data:  14/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 06 - Faça um algoritmo que leia o nome e sexo do usuário e pare quando for digitado 0(zero) e no final informe a porcentagem de homens e mulheres sobre o total de usuários informados.

const ler = require('readline-sync');

let sexo, nome;
let soma, numH, numM;
numH = 0;
numM = 0; 
i    = 0;

do {
    nome = ler.question("Informe o nome do usuario: ");
    if(nome === "0" ) {
        break;
    }

    sexo = ler.question("Informe o sexo do usuario: ");
    sexo = sexo.toUpperCase();

    while(sexo != "F" && sexo != "M") {
        sexo = ler.question("Informe 'M' para Masculino ou 'F' para Feminino para indicar o sexo: ")        
    }

    if(sexo === 'F') {
        numM++;
    } else {
        numH++;
    }

    i++;
} while (nome != '0');

porcH = (numH / i) * 100;
porcM = (numM / i) * 100;

console.log("Foi informado " + porcH.toFixed(2) + "% de Homens e " + porcM.toFixed(2) + "% de mulheres.");
