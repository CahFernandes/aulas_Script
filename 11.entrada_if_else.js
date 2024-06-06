// Entrada IF ELSE - estrutura Consdicional

const ler = require('readline-sync');

let nome = ler.question("Informe o nome do aluno: ");
let nota1 = ler.questionFloat("Informe a nota 1: ");
let nota2 = ler.questionFloat("Informe a nota 2: ");
let nota3 = ler.questionFloat("Informe a nota 3: ");

let media = (nota1 + nota2 + nota3) /3;
media = media.toFixed(2);

if (media >= 60) {
    console.log("O aluno " + nome + " foi Aprovado com a nota " + media);
} else if (media >= 30 && media < 60) {
    console.log("O aluno", nome, "está em Recuperação com a nota", media);
} else {
    console.log(`O aluno ${nome} foi Reprovado com a nota ${media}`);
}
