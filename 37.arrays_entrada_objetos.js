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


