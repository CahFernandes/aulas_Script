// Data:  27/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 01 - Crie uma simulação onde o usuário pode adicionar músicas a uma playlist. 
            // Cada música é um objeto com título, artista e duração. 
            // Use for of para percorrer a playlist, calcular o tempo total e imprimir detalhes de cada música.

const ler = require('readline-sync');

let playlist = [];
let check    = true;

// Adicionando músicas a uma playlist
while(check){
    let titulo = ler.question("Informe o titulo da musica: ");
    let artista = ler.question("Informe artista que canta a musica: ");
    let duracao = ler.questionFloat("Informe a duracao da musica: ");
    playlist.push({titulo: titulo, artista: artista, ducacao: duracao}).toFixed(2);

    let x = ler.question("Musica cadastrada! 'Enter' para cadastrar nova musica ou 'sair' para finalizar: ").toLowerCase();
    if(x === 'sair') {
        check = false;
    }
}

// imprimindo os detalhes de cada musica
console.log("");
console.log("Playlist montada: ");
let tempo = 0;
for (let musica of playlist) {
    console.log(`A música ${musica.titulo}, do artista ${musica.artista} possui duração de ${musica.ducacao} minutos.`);
    tempo = tempo + musica.ducacao;
}      

console.log(`O tempo total da playlist é ${tempo}`);
