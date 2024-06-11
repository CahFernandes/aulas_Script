// Entrada usuário consicional Escolha Caso (Switch Case)

const ler = require('readline-sync');

console.log("------------------ MENU INICIAL -----------------------");
console.log("*** Informe o valor do empréstimo: ***");
let valor = ler.questionFloat("=> ");

console.clear();  // limpar a tela

console.log("------------- MENU OPÇÕES DE PAGAMENTO ----------------");
console.log(" 1. PIX \n 2. DÉBITO \n 3. CRÉDITO \n 4. DINHEIRO");
console.log("-------------------------------------------------------");
let opcao = ler.questionInt("=> ");
let result = 0.0;

switch (opcao) {
    case 1:
        result = valor += valor * 0.15;
        console.log("PIX acréscimo de 15%");
        console.log(`Realizando o pagamento via PIX, o valor ficará em: ${result.toFixed(2)}`);
        break;

    case 2:
        result = valor += valor * 0.20;
        console.log("DÉBITO acréscimo de 20%");
        console.log(`Realizando o pagamento via DÉBITO, o valor ficará em: ${result.toFixed(2)}`);
        break;

    case 3:
        result = valor += valor * 0.25;
        console.log("CRÉDITO acréscimo de 25%");
        console.log(`Realizando o pagamento via CRÉDITO, o valor ficará em: ${result.toFixed(2)}`);
        break;

    case 4:
        result = valor += valor * 0.10;
        console.log("DINHEIRO acréscimo de 10%");
        console.log(`Realizando o pagamento via DINHEIRO, o valor ficará em: ${result.toFixed(2)}`);
        break;    
            
    default:
        console.log("Opção inválida!!!");
        break;
}

