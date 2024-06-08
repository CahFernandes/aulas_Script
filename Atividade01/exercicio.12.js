// Data:  07/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 12 - Criar um algoritmo em que leia o um número inteiro entre 1 e 7 e escreva o dia da semana correspondente.
            //  Caso o usuário digite um número fora desse intervalo, deverá aparecer uma mensagem informando que não existe dia da semana com esse número.

const ler = require('readline-sync');

let num = ler.questionInt("Informe um numero entre 1 e 7: ");

if(num == 1) {
    console.log("O número informado corresponde ao DOMINGO (" + num + ").");
} else {
    if(num == 2) {
        console.log("O número informado corresponde à SEGUNDA (" + num + ").");
    } else {
        if(num == 3) {
            console.log("O número informado corresponde à TERÇA (" + num + ").");
        } else {
            if(num == 4) {
                console.log("O número informado corresponde à QUARTA (" + num + ").");
            } else {
                if(num == 5) {
                    console.log("O número informado corresponde à QUINTA (" + num + ").");
                } else {
                    if(num == 6){
                        console.log("O número informado corresponde à SEXTA (" + num + ").");
                    } else {
                        if(num == 7) {
                            console.log("O número informado corresponde à SÁBADO (" + num + ").");
                        } else {
                            console.log("O número informado NÃO corresponde a NENHUM dia da semana (" + num + ").");
                        }
                    }
                }
            }
        }
    }
}