// Data:  04/07/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 03 - Fazer as questões da Atividade 03 utilizando obrigatoriamente funções(Questões 7 ao 12).


// Questão 07: Faça um algoritmo que leia 15 produtos e seu respectivos valores, e no final mostre o valor total dos valores, o produto mais caro e o mais barato.

const ler = require('readline-sync');

let produto, prodMaior, prodMenor, valor;
let valorTotal = 0;
let valorMenor = 0;
let valorMaior = 0;

function produtos() {
    let valores = [];

    for (let i = 1; i <= 15; i++) {    
        produto = ler.question("Informe o produto " + i + ": ");
        valor = ler.questionFloat("Informe o valor do " + produto + ": ");

        valores.push({produto: produto,valor: valor}) 
    }
    somaValores(valores);
}

function somaValores(valores) {
    valores.forEach(dado => {
        if(dado.valor < valorMenor || valorMenor == 0) {
            valorMenor = dado.valor;
            prodMenor  = dado.produto;
        }    
    
        if(dado.valor > valorMaior){
            valorMaior = dado.valor;
            prodMaior  = dado.produto;
        }   
    
        valorTotal += dado.valor;
    });
    
    console.log(`O valor total dos produtos informados foi R$ ${valorTotal}, sendo o produto mais barato o ${prodMenor} no valor de R$ ${valorMenor} e o mais caro o ${prodMaior} no valor de R$ ${valorMaior}`);
}

produtos();

console.log("---------------------------------------------------------------");
// console.clear();


// Questao 08 - Faça um algoritmo que leia 18 números e no final mostre a soma dos números e se soma for maior que 500, subtraia 100 do valor total.
let num, soma;
num  = 0;
soma = 0;

function buscaNumeros() {
    for (let i = 1; i <= 18; i++) {
    
        num = ler.questionInt("Informe o numero " + i + ": ");
        soma = soma += num
    }
    
    calculaNum(soma)
}

function calculaNum(soma) {
    if(soma > 500) {
        soma = soma - 100
        console.log("A soma dos números informados subtraindo 100 do total é: " + soma);
    } else {
        console.log("A soma total dos números informados é: " + soma);
    }
}

buscaNumeros();

console.log("---------------------------------------------------------------");
// console.clear();


// Questao 09 - Escrever um algoritmo que leia um número n que indica quantos valores devem ser lidos a seguir. 
           // Para cada número lido, mostre uma tabela contendo o valor lido e o fatorial deste valor.

let n,fator, val = 0;

function tabela(n) {
    for (let i = 1; i <= n; i++) {
        
        console.log("");
        valor = ler.questionInt("Informe o valor " + i + ": ");
        fator = (val * val);
        
        console.log("O valor lido foi: " + val);
        console.log("O fatorial desse valor é: " + fator.toFixed(2));
    }
}

n = ler.questionInt("Informe quantos valores devem ser solicitados a seguir: ");
tabela(n);

console.log("---------------------------------------------------------------");
// console.clear();


// Questao 10 - Faça um algoritmo que leia vários números inteiros e calcule o somatório dos números negativos. O fim da leitura será indicado pelo número (0)

let i    = 1;
let somaN = 0;

function somaNeg() {
    do {
        num = ler.questionInt("Informe o numero " + i + " ou digite '0' para finalizar: ");
        if(num === 0 ) {
            break;
        }
    
        if(num < 0) {
            somaN = somaN + num;
        }
        
        i++;
    } while (num != '0');
    
    mostraSoma(somaN);
}

function mostraSoma(somaN) {
    console.log("O somatório de números negativos foi: " + somaN);    
}

somaNeg();


console.log("---------------------------------------------------------------");
// console.clear();


// Questao 11 - Escreva um algoritmo que calcule a média dos números digitados pelo usuário, se eles forem pares. Termine a leitura se o usuário digitar zero (0).

i = 1;
let somaM = 0;
let media = 0;
let qtdP  = 0;

function somaMedia() {
    do {
        num = ler.questionInt("Informe o numero " + i + " ou digite '0' para sair: ");
        if(num === 0 ) {
            break;
        }
    
        if((num%2) == 0) {
            soma = soma + num;
            qtdP++; 
        }
            
        i++;
    } while (num != '0');

    calcMedia(soma,qtdP);    
}

function calcMedia(soma,qtdP) {
    media = soma / qtdP;
    console.log("A média dos números pares foi: " + media.toFixed(2));    
}

somaMedia();


console.log("---------------------------------------------------------------");
// console.clear();


// Questao 12 - Jorge tem 1,72 metro e cresce 3 centímetros por ano, enquanto Roberto tem 1,65 metro e cresce 4 centímetros por ano. 
            // Construa um algoritmo que calcule e imprima quantos anos serão necessários para que Roberto seja maior que Jorge.
    
let jorge = 1.72, roberto = 1.65;
let k = 0;

function tempoJorge() {
    do {            
    
        roberto = roberto + 0.04;
        jorge = jorge + 0.03;
        
        i++;
    } while (roberto <= jorge);
    
    console.log("Para que Roberto seja maior que o Jorge, serão necessários " + i + " anos.");
}
        
tempoJorge();
