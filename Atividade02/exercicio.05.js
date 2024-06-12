// Data:  11/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 05 - Crie um algoritmo chamado Estacoes.
            //  Este algoritmo deve ler uma data e armazenar na variável mes um número entre 1 e 12, correspondendo a um dos meses do ano. 
            //  No final, você deve imprimir uma mensagem conforme o exemplo:

            // "A estação do ano correspondente ao mês de Janeiro é Verão"

            // Considere a estação prevalente para cada mês:
            // a) Janeiro (1): Verão                  b) Fevereiro (2): Verão
            // c) Março (3): Verão                    d) Abril (4): Outono
            // e) Maio (5): Outono                    f) Junho (6): Outono
            // g) Julho (7): Inverno                  h) Agosto (8): Inverno
            // i) Setembro (9): Inverno               j) Outubro (10): Primavera
            // k) Novembro (11): Primavera            l) Dezembro (12): Primavera

const ler = require('readline-sync');

let data = ler.question("Informe uma data (ddmmaaaa): ");
let mes  = 0;

while (isNaN(data)) {
    console.log("Data inválida! Favor informar no formato (ddmmaaaa): ");
    data = ler.question("=> ");
}
mes = data[2] + data[3];
// console.log(mes);

switch (mes) {
    case "01":
    case "02":        
    case "03":
        if(mes == "01") {
            nomeMes = "Janeiro"
        } else if(mes == "02") {
            nomeMes = "Fevereiro"
        } else {
            nomeMes = "Março"
        }
        console.log(`A estação do ano correspondente ao mês de ${nomeMes} é Verão.`);
        break;

    case "04":
    case "05":        
    case "06":
        if(mes == "04") {
            nomeMes = "Abril"
        } else if(mes == "05") {
            nomeMes = "Maio"
        } else {
            nomeMes = "Junho"
        }
        console.log(`A estação do ano correspondente ao mês de ${nomeMes} é Outono.`);
        break;

    case "07":
    case "08":        
    case "09":
        if(mes == "07") {
            nomeMes == "Julho"
        } else if(mes = "08") {
            nomeMes = "Agosto"
        } else {
            nomeMes = "Setembro"
        }
        console.log(`A estação do ano correspondente ao mês de ${nomeMes} é Inverno.`);
        break;      

    case "10":
    case "11":        
    case "12":
        if(mes == "10") {
            nomeMes = "Outono"
        } else if(mes == "11") {
            nomeMes = "Novembro"
        } else {
            nomeMes = "Dezembro"
        }
        console.log(`A estação do ano correspondente ao mês de ${nomeMes} é Primavera.`);
        break;   

    default:
        console.log("Data informada Inválida!!");
        break;
}
