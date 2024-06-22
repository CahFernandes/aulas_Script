// Data:  21/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 02 -  Gerenciamento de Chamadas de Emergência
            // Contexto: Você opera um centro de chamadas de emergência. Cada nova chamada deve ser registrada com seu tipo e uma mensagem breve.

            // Tarefa: Use o readline para inserir diversas chamadas no sistema, cada uma com seu tipo e mensagem, 
            // Armazene essas chamadas em um array, 
            // Implemente uma função para encontrar e priorizar chamadas de "Incêndio", removendo-as do array principal e movendo-as para um array de alta prioridade, 
            // Exiba o array de chamadas de alta prioridade e o array regular após a filtragem.

const ler = require('readline-sync');

let chamadas = [];
let check    = true;

while(check){
    let tipo = ler.question("Informe o tipo de Emergencia: ");
    let mensagem = ler.question("Informe a Mensagem: ");
    chamadas.push({tipo: tipo, mensagem: mensagem});

    let x = ler.question("Chamada cadastrada! 'Enter' para cadastrar nova chamada ou 'sair' para finalizar: ").toLowerCase();
    if(x === 'sair') {
        check = false;
    }
}

let chamadasN = chamadas.filter(tipo => tipo.tipo.toLowerCase() != "incendio");
let chamadasP = chamadas.filter(tipo => tipo.tipo.toLowerCase() == "incendio"); 

console.log("Chamadas Regular:");
console.table(chamadasN);

console.log("Chamadas Alta Prioridade:");
console.table(chamadasP);
