// Data:  27/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 02 - Crie três arrays contendo, respectivamente, sujeitos, verbos e objetos (ex: ["um cachorro", "comer", "um biscoito"]). 
            // Use for para gerar uma história de cinco frases, selecionando aleatoriamente elementos de cada array para formar frases.

let frase1 = ["um papagaio", "bicou", "chinelo havaianas"];
let frase2 = ["um homem","comeu", "hamburguer"];
let frase3 = ["um gato", "subiu", "no telhado"];

for (let i = 0; i < 5; i++) {
    console.log(`${frase1[Math.floor(Math.random() * 3)]} ${frase2[Math.floor(Math.random() * 3)]} ${frase3[Math.floor(Math.random() * 3)]}`);               
}