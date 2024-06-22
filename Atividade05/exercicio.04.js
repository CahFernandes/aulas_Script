// Data:  21/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 04: Registro de Participantes de Conferência
           // Contexto: Você está organizando uma conferência virtual e precisa gerenciar o registro dos participantes.
           // Tarefa: Crie um array para manter a lista de participantes que ainda precisam ser registrados, Use o readline para adicionar nomes ao array,
           // Implemente uma função para registrar um participante, removendo seu nome do array após ser registrado, 
           // Verifique se o participante está na lista antes de registrá-lo, usando indexOf, Exiba a lista atualizada de participantes ainda não registrados.

const ler = require('readline-sync');

let registrados   = [];
let participantes = [];

let check  = true;
let i      = 0;

while(check){
    let nome = ler.question("Informe o nome do Participante a ser registrado ou 'sair' para finalizar: ");
    if(nome.toLocaleLowerCase() === 'sair') {
        check = false;
    } else {
        participantes.push(nome);
    }
} 
console.log("Participantes cadastrados!");    

// Registrar um participante
check = true;
do {
    let registrar = ler.question(`Deseja REGISTRAR o participante ${participantes[i]} (S \ N)?`);
    if(registrar.toLowerCase() === 's') {
        let index = registrados.indexOf(participantes[i]);
        if(index == -1) {
           registrados.push(participantes[i]);
        }
    } else {
        let sair = ler.question(`Deseja terminar o registro de participantes (S \ N)?`);
        if(sair.toLowerCase() === 's') {
            check = false;
        }
    } 
    i++;   
    if(i > participantes.length) {
        check = false;
    }
} while (check);

// retira os participantes registrados do array de participante
let naoRegistrados = participantes.filter(a => !registrados.includes(a));

console.log("");
console.log("Participantes Registrados:");
console.table(registrados);  

console.log("");
console.log("Participantes ainda não registrados:");
console.table(naoRegistrados);          