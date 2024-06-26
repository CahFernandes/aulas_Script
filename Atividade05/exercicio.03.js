// Data:  21/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 03 -  Análise de Pesquisa de Livros
            // Contexto: Você está fazendo uma pesquisa para entender quais categorias de livros são as mais populares em uma biblioteca.
            // Tarefa: Utilize o readline para capturar títulos de livros e suas categorias, adicionando-os a um array de objetos,
            // Use o método slice para selecionar uma quantidade específica de livros a serem analisados, 
            // Agrupe os livros por categoria e conte quantos livros há em cada uma, Exiba os resultados da contagem por categoria.

const ler = require('readline-sync');

var counts       = [];
let livros_categ = [];
let livros       = [];
let check        = true;

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
livros_analis = livros.slice(0,qtde);
console.table(livros_analis);

// Busca a quantidade de livros em cada categoria informada
for (let i = 0; i < livros_analis.length; i++) {
  if(livros_categ[livros_analis[i].categoria] == undefined)  
     livros_categ[livros_analis[i].categoria] = {categoria: livros_analis[i].categoria, qtde: 0};

  livros_categ[livros_analis[i].categoria].qtde++;
}

// Imprime a quantidade de livros de cada categoria
livros_categ = Object.values(livros_categ);
for (let index = 0; index < livros_categ.length; index++) {
    if(livros_categ[index]['qtde'] > 1) {
        console.log(`Na categoria ${livros_categ[index]['categoria']}, possuem ${livros_categ[index]['qtde']} livros cadastrados.`);    
    } else {
        console.log(`Na categoria ${livros_categ[index]['categoria']}, possui ${livros_categ[index]['qtde']} livros cadastrado.`);    
    }    
}






