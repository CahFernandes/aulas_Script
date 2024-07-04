// Data:  03/07/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 02 - Fazer as questões da Atividade 02 utilizando obrigatoriamente funções(Todas as Questões).

// Questão 01: Faça um algoritmo que leia o peso de uma pessoa na Terra e o número de um planeta (de acordo com a tabela abaixo). 
            // Depois, calcule e escreva o valor do peso dessa pessoa no planeta escolhido e o nome do planeta (peso no planeta = pesonaterra / 10 * gravidade). 
            // A relação de planetas e o valor das gravidades relativas à Terra são:
            // 1. Mercurio -> 0.37 
            // 2. Venus    -> 0.88
            // 3. Marte    -> 0.38
            // 4. Jupiter  -> 2.64
            // 5. Saturno  -> 1.15
            // 6. Urano    -> 1.17

const ler = require('readline-sync');            

function pesoPlaneta(pesoP,planeta,pesoT) {
    switch (planeta) {
        case 1:
            pesoP = pesoT * 0.37;
            console.log(`O seu peso no planeta Mecúrio seria ${pesoP.toFixed(2)}`);
            break;
    
        case 2:
            pesoP = pesoT * 0.88;
            console.log(`O seu peso no planeta Vênus seria ${pesoP.toFixed(2)}`);
            break;
    
        case 3:
            pesoP = pesoT * 0.38;
            console.log(`O seu peso no planeta Marte seria ${pesoP.toFixed(2)}`);
            break;
    
        case 4:
            pesoP = pesoT * 2.64;
            console.log(`O seu peso no planeta Júpter seria ${pesoP.toFixed(2)}`);
            break;
    
        case 5:
            pesoP = pesoT * 1.15;
            console.log(`O seu peso no planeta Saturno seria ${pesoP.toFixed(2)}`);
            break;
    
        case 6:
            pesoP = pesoT * 1.17;
            console.log(`O seu peso no planeta Urano seria ${pesoP.toFixed(2)}`);
            break;
    
        default:
            console.log("Opção inválida!!!");
            break;
    }
}

let pesoT = ler.questionInt("Informe seu peso: ");
let pesoP = 0;

console.clear();

console.log("Informe o planeta que deseja saber seu peso de acordo com as opções abaixo: ");
console.log(" 1.Mecúrio \n 2.Vênus \n 3.Marte \n 4.Júpter \n 5.Saturno \n 6.Urano");
let planeta = ler.questionInt("=> ");

pesoPlaneta(pesoP,planeta,pesoT);

console.log("---------------------------------------------------------------");
// console.clear();

// Questao 02: Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
            // Faça um programa que calcule o valor total a ser pago por uma pessoa. 
            // O programa deverá ler o valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).

function valorTotal(codCliente,valor) {
    switch (codCliente) {
        case 1:
            total = valor;
            console.log(`O valor total a ser pago é ${total.toFixed(2)}`);
            break;
    
        case 2:
            total = valor -= valor * 0.10;
            console.log(`O cliente teve um desconto de 10%, o valor total a ser pago é ${total.toFixed(2)}`);
            break;
    
        case 3:
            total = valor -= valor * 0.05;
            console.log(`O cliente teve um desconto de 5%, o valor total a ser pago é ${total.toFixed(2)}`);
            break;
        default:
            console.log("Opção do Código do Cliente inválida!");
            break;
    }  
}      

function infoVenda() {
    let total = 0;
    let valor = ler.questionFloat("Informe o valor total da Compra: ");
    let codCliente = ler.questionInt("Informe o codigo do Cliente (1. Comum; 2. Funcionario; 3. VIP): ");

    valorTotal(codCliente,valor);
}

infoVenda();

console.log("---------------------------------------------------------------");
// console.clear();

// Questao 03: Faça um programa, utilizando estrutura de condição, que receba um número real, digitado pelo usuário e mostre o menu para selecionar o tipo de cálculo que deve ser realizado:
            // 101 - Raiz quadrada
            // 102 - A metade
            // 103 - 10% do número
            // 104 - O dobro

function calculadora(valor,opcao) {
    let result = 0;
            
    switch (opcao) {
        case 101:
            result = valor * valor;
            console.log(`A raizz quadrada do número informado (${valor}) é ${result}`);
            break;
    
        case 102:
            result = valor / 2;
            console.log(`A metade do número informado (${valor}) é ${result}`);
            break;
    
        case 103:
            result = valor * 0.10;
            console.log(`10% do número informado (${valor}) é ${result}`);
            break;        
    
        case 104:
            result = valor * 2;
            console.log(`O dobro do número informado (${valor}) é ${result}`);
            break;                
    
        default:
            console.log("Opção inválida!!");
            break;
    }        
}

console.log("Informe um número: ");
let valor = ler.questionFloat("=> ");

console.log("------------- MENU OPÇÕES DE CÁLCULO ----------------");
console.log(" 101. Raiz quadrada \n 102. A metade \n 103. 10% do número \n 104. O dobro");
console.log("-----------------------------------------------------");
let opcao = ler.questionInt("=> ");

calculadora(valor,opcao);
                
console.log("---------------------------------------------------------------");
// console.clear();

// Questao 04: Faça um programa que receba o valor da venda, escolha a condição de pagamento no menu e mostre o total da venda final conforme condições a seguir:
            // Venda a Vista - desconto de 10%
            // Venda a Prazo 30 dias - desconto de 5%
            // Venda a Prazo 60 dias - mesmo preço
            // Venda a Prazo 90 dias - acréscimo de 5%
            // Venda com cartão de débito - desconto de 8%

function totalVenda(valor,opcao) {
    let total = 0;
            
    switch (opcao) {
        case 1:
            total = valor -= valor * 0.10;
            console.log(`Realizando o pagamento a vista, o valor total a pagar é ${total.toFixed(2)}`);
            break;
    
        case 2:
            total = valor -= valor * 0.05;
            console.log(`Realizando o pagamento a prazo (30 dias), o valor total a pagar é ${total.toFixed(2)}`);        
            break;
    
        case 3:
            total = valor;
            console.log(`Realizando o pagamento a prazo (60 dias), o valor total a pagar é ${total.toFixed(2)}`);
            break;
    
        case 4:
            total = valor += valor * 0.05;
            console.log(`Realizando o pagamento a prazo (90 dias), o valor total a pagar é ${total.toFixed(2)}`);
            break;
    
        case 5:
            total = valor -= valor * 0.08;
            console.log(`Realizando o pagamento via cartão de Débito, o valor total a pagar é ${total.toFixed(2)}`);
            break;
    
        default:
            console.log("Opção invalida!!");
            break;
    }  
}   

function cadastraVenda() {
    let valor = ler.questionFloat("Informe o valor da venda: ");

    console.log("------------- MENU OPÇÕES DE PAGAMENTO ----------------");
    console.log(" 1. À vista \n 2. A Prazo (30 dias) \n 3. A Prazo (60 dias) \n 4. A Prazo (90 dias) \n 5. Cartão de Débito");
    console.log("-------------------------------------------------------");
    let opcao = ler.questionInt("=> ");
    
    totalVenda(valor,opcao);
}

cadastraVenda();
            

console.log("---------------------------------------------------------------");
// console.clear();                      

// Questao 05: Crie um algoritmo chamado Estacoes.
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

function buscaData() {
    let data = ler.question("Informe uma data (ddmmaaaa): ");
    let mes  = 0;

    while (isNaN(data)) {
        console.log("Data inválida! Favor informar no formato (ddmmaaaa): ");
        data = ler.question("=> ");
    }
    mes = data[2] + data[3];

    estacaoCorresp(mes)
}         

function estacaoCorresp(mes) {
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
                nomeMes = "Julho"
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
}
buscaData();

