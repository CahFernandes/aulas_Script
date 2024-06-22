// Data:  21/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 03 -  Análise de Pesquisa de Livros
            // Contexto: Você está fazendo uma pesquisa para entender quais categorias de livros são as mais populares em uma biblioteca.
            // Tarefa: Utilize o readline para capturar títulos de livros e suas categorias, adicionando-os a um array de objetos,
            // Use o método slice para selecionar uma quantidade específica de livros a serem analisados, 
            // Agrupe os livros por categoria e conte quantos livros há em cada uma, Exiba os resultados da contagem por categoria.

const ler = require('readline-sync');

var counts = [];

let livros = [];
let check    = true;

while(check){
    let titulo = ler.question("Informe o titulo do livro: ");
    let categoria = ler.question("Informe a categoria do livro informado: ");
    livros.push({titulo: titulo, categoria: categoria});

    let x = ler.question("Livro cadastrado! 'Enter' para cadastrar novo livro ou 'sair' para finalizar: ").toLowerCase();
    if(x === 'sair') {
        check = false;
    }
}            

// Informa a quantidade de livros a serem analisados
let qtde = ler.questionInt("Informe a quantidade de livros a serem analisados: ");
qtde_livros = livros.slice(0,qtde);
console.table(qtde_livros);

// Agrupar os livros por categoria





