// Data:  14/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 09 - Escrever um algoritmo que leia um número n que indica quantos valores devem ser lidos a seguir. 
           // Para cada número lido, mostre uma tabela contendo o valor lido e o fatorial deste valor.

const ler = require('readline-sync');

let n,fator, valor;
fator = 0;
valor = 0;

n = ler.questionInt("Informe quantos valores devem ser solicitados a seguir: ");

for (let i = 1; i <= n; i++) {
        
    console.log("");
    valor = ler.questionInt("Informe o valor " + i + ": ");
    fator = (valor * valor);
    
    console.log("O valor lido foi: " + valor);
    console.log("O fatorial desse valor é: " + fator.toFixed(2));
}
