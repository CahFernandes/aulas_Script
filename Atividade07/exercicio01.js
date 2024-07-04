// Data:  03/07/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 01 - Fazer as questões da Atividade 01 utilizando obrigatoriamente funções(Questões 10 ao 18).
            // Questao 10: A prefeitura de Nova Lima abriu uma linha de crédito para os funcionários estatutários. 
            // O valor máximo da prestação não poderá ultrapassar 25% do salário bruto. 
            // Fazer um algoritmo que permita entrar com o salário bruto e o valor da prestação, e informar se o empréstimo pode ou não ser concedido

const ler = require('readline-sync');

function cadastarCredito() {
    let val_maximo = 0.0;
    let salario = ler.questionFloat("Informe o salario do servidor: ");
    let prestacao = ler.questionFloat("Informe o valor da prestação a ser paga: ");
    val_maximo = (prestacao / salario).toFixed(2);

    validarCredito(val_maximo);
}

function validarCredito(val_maximo) {
        
    if(val_maximo > 0.25) {
        console.log("O valor da prestação está ACIMA do permitido (25%). O empréstimo NÃO será concedido.");
    } else {
        console.log("O valor da prestação está ABAIXO do permitido (25%). O empréstimo será concedido.");
    }
}

cadastarCredito();


console.log("---------------------------------------------------------------");
// console.clear();

// Questao 11: Escreva um algoritmo que leia um número e informe se ele é divisível por 10, por 5 ou por 2 ou se não é divisível por nenhum deles.

function validaDivisao() {

    let div10 = 0.0;
    let div5  = 0.0;
    let div2  = 0.0; 

    let num = ler.questionInt("Informe um numero: ");

    calcularDivisao(num);
}

function calcularDivisao(num) {
    div10 = num%10;
    div5  = num%5;
    div2  = num%2;

    if(div10 == 0) {
        console.log("O número informado é divisível por 10, por 5 e por 2.");
    } else {
        if(div5 == 0) {
            console.log("O número informado é divisível por 5");
        } else {
            if(div2 == 0){
                console.log("O número informado é divisível por 2");
            } else {
                console.log("O número informado não é divisível por 10, nem por 5, nem por 2");
            }
        }
    }
}

validaDivisao();

console.log("---------------------------------------------------------------");
// console.clear();

// Questao 12: Criar um algoritmo em que leia o um número inteiro entre 1 e 7 e escreva o dia da semana correspondente.
    //  Caso o usuário digite um número fora desse intervalo, deverá aparecer uma mensagem informando que não existe dia da semana com esse número.


function diaSemana() {
    let num = ler.questionInt("Informe um numero entre 1 e 7: ");
    
    switch (num) {
        case 1:
            console.log("O número informado corresponde ao DOMINGO (" + num + ").");
            break;
    
        case 2:
            console.log("O número informado corresponde à TERÇA (" + num + ").");
            break;

        case 3:
            console.log("O número informado corresponde à TERÇA (" + num + ").");
            break;

        case 4:
            console.log("O número informado corresponde à QUARTA (" + num + ").");
            break;

        case 5:
            console.log("O número informado corresponde à QUINTA (" + num + ").");
            break;

        case 6:
            console.log("O número informado corresponde à SEXTA (" + num + ").");
            break;

        case 7:
            console.log("O número informado corresponde à SÁBADO (" + num + ").");
            break;

        default:
            console.log("O número informado NÃO corresponde a NENHUM dia da semana (" + num + ").");
            break;
    }
}    
    
diaSemana();

console.log("---------------------------------------------------------------");
// console.clear();

// Questao 13: Um posto está vendendo combustíveis com a seguinte tabela de descontos:
    // Álcool Até 25 litros, desconto de 2% por litro
    // Acima de 25 litros, desconto de 4% por litro
    // Gasolina Até 25 litros, desconto de 3% por litro
    // Acima de 25 litros, desconto de 5% por litro
    // Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina),
    // calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 5,86 e o preço do litro do álcool é R$ 4,70.

function valorPago(tipoC, litro) {
    let valor = 0.0;

    if(tipoC == "A") {
        valor = litro * 4.70;
        if(litro <= 25) {
            valor = valor - (valor * 0.02);
        } else {
            valor = valor - (valor * 0.04);
        }
    } else {
        valor = litro * 5.86;
        if(litro <= 25) {
            valor = valor - (valor * 0.03);
        } else {
            valor = valor - (valor * 0.05);
        }
    }
    
    console.log("O valor a ser pago é: " + valor.toFixed(2));
}

let tipoC = ler.question("Informe o Tipo de Combustivel (A - alcool, G - gasolina): ").toUpperCase();
if(tipoC == "A" || tipoC == "G") {
    let litro = ler.questionFloat("Informe a quantidade de litros do combustivel: ");
    valorPago(tipoC, litro);
} else {
    console.log("O tipo informado não existe na tabela.");
}


console.log("---------------------------------------------------------------");
// console.clear();

// Questao 14: Escreva um programa que leia uma letra e mostre se ela é vogal ou consoante.

function validaLetra(letra) {
    var vogal  = ["a","e","i","o","u"];
    let possui = 0;

    for(var i = 0; i < vogal.length; i++) {
        if(vogal[i] === letra.toLowerCase()){
            possui = 1;
        }
    }
    
    if(possui == 1) {
        console.log("A letra informada é uma vogal");
    } else {
        console.log("A letra informada é uma consoante");
    }
}

let letra  = ler.question("Informe uma letra: ");
validaLetra(letra);


console.log("---------------------------------------------------------------");
// console.clear();

// Questao 15: Uma empresa dá um prêmio aos funcionários que cumprem ou ultrapassam determinado valor de vendas de produtos. 
    // A cada funcionário foi estabelecido um valor a ser alcançado. 
    // Faça um algoritmo para ler o valor fixado e o valor de vendas de um funcionário, e imprimir a mensagem “Ganhou!”, se o funcionário tiver conseguido o prêmio, 
    // ou “Não ganhou!”, se não tiver conseguido.

function cadastraVendas() {
    let valorFixo = ler.questionFloat("Informe o valor de vendas do mes: ");
    let valorFunc = ler.questionFloat("Informe o valor de vendas do funcionario: ");
    
    ganhouPremio(valorFixo, valorFunc);
}

function ganhouPremio(valorFixo, valorFunc) {
    if(valorFunc >= valorFixo) {
        console.log("Ganhou!");
    } else {
        console.log("Não Ganhou!");
    }        
}

cadastraVendas();


console.log("---------------------------------------------------------------");
// console.clear();

// Questao 16: Uma empresa paga a seus funcionários R$ 5,00 de comissão para cada produto vendido, entretanto, se forem vendidos mais de 200 produtos, o valor aumenta para R$ 7,50.
    // Se a quantidade for superior a 450 produtos, o valor da comissão sobe para R$ 10,00. 
    // Monte um programa para ler o nome de um funcionário e a quantidade de produtos que ele vendeu. 
    // Exiba o nome do funcionário e o total de comissão que ele vai receber.

function cadastrarComissao() {
    let comissao = 0.0;
    let nome     = ler.question("Informe o nome do funcionario: ");
    let vendas   = ler.questionInt("Informe a quantidade de produtos que o " + nome + " vendeu: ");
    
    calculaComissao(nome,vendas,comissao);    
}    

function calculaComissao(nome,vendas,comissao) {
    if(vendas <= 200) {
        comissao = vendas * 5;
    } else if(vendas > 200 && vendas <= 450) {
        comissao = vendas * 7.5;
    } else {
        comissao = vendas * 10;
    }    
    console.log(`O funcionário ${nome} vendeu ${vendas} produtos e receberá R$ ${comissao.toFixed(2)} de comissão.` );
}

cadastrarComissao();
    
console.log("---------------------------------------------------------------");
// console.clear();

// Questao 17: Escreva um algoritmo que leia as idades de 2 homens e 2 mulheres (considere que as idades dos homens serão sempre diferentes, bem como as das mulheres).
        //  Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha

function soma() {
    let homem = [];
    let mulher = [];

    for (let i = 1; i <= 2; i++) {
        homem[i] = ler.questionInt("Informe a idade do homem numero " + i + ": ");        
    }

    for (let j = 1; j <= 2; j++) {
        mulher[j] = ler.questionInt("Informe a idade da mulher numero " + j + ": ");        
    }

    let somaH = homem.sort(function(a, b){return b - a;})[0] + mulher.sort(function(a, b){return a - b;})[0];
    let somaM = homem.sort(function(a, b){return a - b;})[0] + mulher.sort(function(a, b){return b - a;})[0];

    console.log("A soma da idade do Homem mais Velho com a Mulher mais nova é " + somaH + ".");
    console.log("O produto da idade da Mulher mais Velha com o Homem mais novo é " + somaM + ".");
}

soma();


console.log("---------------------------------------------------------------");
// console.clear();

// Questao 18 -  Ler o nome de 2 times e o número de gols marcados na partida. 
              // Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

function vencedor(time1,time2,gols1,gols2) {
    if(gols1 > gols2) {
        console.log("O vencedor da partida é " + time1 + ", que venceu a partida por " + gols1 + " x " + gols2);
    } else if(gols2 > gols1) {
        console.log("O vencedor da partida é " + time2 + ", que venceu a partida por " + gols2 + " x " + gols1);
    } else {
        console.log("A partida terminou em EMPATE!");
    }        
}

let time1 = ler.question("Informe o nome do time da casa: ");
let time2 = ler.question("Informe o nome do time visitante: ");
let gols1 = ler.questionInt("Informe a quantidade de gols do " + time1 + ": ");
let gols2 = ler.questionInt("Informe a quantidade de gols do " + time2 + ": ");

vencedor(time1,time2,gols1,gols2);



