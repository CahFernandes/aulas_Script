// utilizando o Readline para capturar dados para um objeto Array Matriz

const ler = require('readline-sync');

let cliente = [{}];
let check   = true;

while(check){
    let nome = ler.question("Informe seu nome: ");
    let idade = ler.questionInt("Informe sua idade: ");
    let email = ler.question("Informe seu email: ");
    let carteira = ler.questionFloat("Quanto ele tem de dinheiro? ");

    cliente.push({nome: nome, idade: idade, email: email, carteira: carteira});

    let x = ler.question("Dados cadastrados! 'Enter' para cadastrar outro cliente ou 'sair' para finalizar: ").toLowerCase();
    if(x === 'sair') {
        check = false;
        console.log("Sistema finalizado!");
    }
}

console.table(cliente);

do {
    console.log("Informe uma das opções: ");
    console.log("1. Listar carteira do cliente com valor menor que 100 reais");
    console.log("2. Listar clientes em ordem alfabética");
    console.log("3. Sair");

    let opcao = ler.questionInt("=> ")

    if(opcao == 1){
        clie = cliente.filter(c => c.carteira < 100)
        console.table(clie);
    } else if(opcao == 2) {
        ordem = cliente.sort((a,b) => a.nome.localeCompare(b.nome))
        console.table(ordem);
    } else {
        console.log("Cadastro finalizado!"); 
    }
} while(opcao == 3)