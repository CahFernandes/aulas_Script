// Data:  21/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 05: Sistema de Registro de Funcionários
            // Você vai criar um sistema para adicionar, atualizar e exibir informações de funcionários. 
            // Cada funcionário será representado por um objeto com nome, departamento, cargo e anos de serviço.

            // Tarefa: Iniciar o readline e o array de funcionários: 
            // Use readline para capturar entradas do usuário, Mantenha um array chamado funcionarios para armazenar objetos que representam cada funcionário, 
            // Adicionar Funcionários: Permita que o usuário adicione novos funcionários inserindo nome, departamento, cargo e anos de serviço.
            // Exibir Funcionários: Permita que o usuário veja todos os funcionários registrados.
            // Buscar Funcionário por Nome: Permita que o usuário busque um funcionário pelo nome para ver seus detalhes.
            // Encerrar o Programa: Permita que o usuário encerre o programa.


const ler = require('readline-sync');

let funcionarios = [];
let check   = true;

while(check){
    let nome = ler.question("Informe o nome do funcionario: ");
    let departamento = ler.question("Informe o departamento: ");
    let cargo = ler.question("Informe o cargo: ");
    let tempo_serv = ler.questionInt("Quantos anos de serviço o funcionario possui? ");

    funcionarios.push({nome: nome, departamento: departamento, cargo: cargo, tempo_serv: tempo_serv});
    
    let x = ler.question("Dados cadastrados! 'Enter' para cadastrar outro funcionario ou 'sair' para finalizar: ").toLowerCase();
    if(x === 'sair') {
        check = false;
        console.log("Sistema finalizado!");
    }
}

console.table(funcionarios);
check   = true;
do {
    console.clear();
    console.log("Informe a opção desejada: ");
    console.log("1. Adicionar novo Funcionário");
    console.log("2. Exibir informações dos Funcionários cadastrados");
    console.log("3. Exibir informações de um Funcionário informando o Nome");
    console.log("4. Sair");

    let opcao = ler.questionInt("=> ")
    switch (opcao) {
        case 1:
            let nome = ler.question("Informe o nome do funcionario: ");
            let departamento = ler.question("Informe o departamento: ");
            let cargo = ler.question("Informe o cargo: ");
            let tempo_serv = ler.questionInt("Quantos anos de serviço o funcionario possui? ");

            funcionarios.push({nome: nome, departamento: departamento, cargo: cargo, tempo_serv: tempo_serv});
            break;
        case 2:
            console.table(funcionarios);
            break;
        case 3:
            let func = ler.question("Informe o nome do funcionario que deseja listar as informacoes:");
            let funcionario = funcionarios.filter(nome => nome.nome.toLowerCase() == func.toLowerCase());
            console.table(funcionario);
            break;
        default:
            check = false;
            break;
    }
} while(check)            