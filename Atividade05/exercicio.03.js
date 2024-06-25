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

// Ordena a matriz qtde_livros por categoria
livros_analis.sort((a,b) => a.categoria.localeCompare(b.categoria));

let qtde_livro = 0;
let categ_ant  = "";
for (let i = 0; i < livros_analis.length; i++) {
    if(livros_analis[i]['categoria'] != categ_ant) {
        qtde_livro = 1;        
    } else {
        qtde_livro++;        
    }

    // busca o indice já existente
    let pos = livros_categ.indexOf(livros_analis[i]['categoria']);
    console.log(pos, categ_ant);
    if(pos >= 0) {
        livros_categ[[pos]['qtde_livro']] = qtde_livro;
    } else {    
        livros_categ.push({categoria: livros_analis[i]['categoria'], qtde_livro: qtde_livro});
    }
    categ_ant = livros_analis[i]['categoria'];
}

for (let index = 0; index < livros_categ.length; index++) {
    if(livros_categ[index]['qtde_livro'] > 1) {
        console.log(`Na categoria ${livros_categ[index]['categoria']}, possuem ${livros_categ[index]['qtde_livro']} livros cadastrados.`);    
    } else {
        console.log(`Na categoria ${livros_categ[index]['categoria']}, possui ${livros_categ[index]['qtde_livro']} livros cadastrado.`);    
    }    
}






