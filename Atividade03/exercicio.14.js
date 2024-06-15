// Data:  14/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 14 - Existem três candidatos a uma vaga para (1, 2 e 3). Feita a eleição, os votos são registrados. 
// O voto de cada eleitor foi codificado da seguinte forma: 1, 2 ou 3, para voto em cada candidato em questão, 0 para voto branco, 4 para votos nulos.
            // O programa deverá informar:
            // O número do candidato vencedor;
            // O número de votos em branco;
            // O número de votos nulos
            // O número de eleitores que compareceram às urnas.
            // Obs.: Admite-se que não são possíveis empates.
            // Construa um algoritmo que execute esta tarefa. O voto finalizador tem código –1, e não deve ser computado.

const ler = require('readline-sync');

let i = 0;
let qtde  = 0;
let qtdeB = 0;
let qtdeN = 0;
let qtde1 = 0;
let qtde2 = 0;
let qtde3 = 0;

do {
    i++;

    voto = ler.questionInt("Informe o numero do candidato desejado (1,2 ou 3) ou 0 para voto branco ou 4 para voto nulo: ");
    if(voto === -1 ) {
        break;
    }

    switch (voto) {
        case 1:
            qtde++;
            qtde1++;
            break;
        case 2:
            qtde++;
            qtde2++;
            break;
        case 3:
            qtde++;
            qtde3++;
            break;            
        case 4:
            qtdeN++;
            break;   
        case 0:
            qtdeB++;
            break;                                
        default:
            console.log("Informação inválida!");
            break;
    }
    
} while (voto = '-1');

if(qtde1 > qtde2 && qtde1 > qtde3){
    console.log("O Vencedor foi o Candidato 1!");
} else if(qtde2 > qtde3 && qtde2 > qtde1) {
    console.log("O Vencedor foi o Candidato 2!");
} else {
    console.log("O Vencedor foi o Candidato 3!");
}

console.log("Houve " + qtdeB + " voto(s) Branco(s) e " + qtdeN + " voto(s) Nulo(s) nessa votação");
console.log((i - 1) + " eleitor(es) vieram nessa votação");

