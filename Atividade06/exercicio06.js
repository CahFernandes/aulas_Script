// Data:  28/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 06 - Crie um objeto onde cada chave é um candidato e cada valor é um array de objetos representando os eleitores que votaram no candidato. 
            // Use forEach para calcular o total de votos por candidato e if else para determinar o vencedor.

let qtde1 = 0;
let qtde2 = 0;
let qtde3 = 0;

let votacao = [
    [{candidato: "Fulano"},[{nome:"Maria Eugenia"},{nome:"José Florisbelo"},{nome:"Carol Quitanda"}]],
    [{candidato: "Ciclano"}, [{nome:"Joao Nogueira"},{nome:"Bruna do Surf"}]],
    [{candidato: "Beltrano"}, [{nome:"Cibele Correia"},{nome:"Felipe Atos"},{nome:"Pedro Pedreira"},{nome:"Andre Vicente"}]]
]            

votacao.forEach(dado => {
    for (valor of dado) {
        console.log(valor); 
    }
    
});