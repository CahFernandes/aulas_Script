// Data:  20/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 01 - Organização de Inventário de Produtos
// Contexto: Você está ajudando a gerenciar o inventário de um armazém. 
        // Precisa adicionar produtos e suas quantidades ao sistema e, em seguida, garantir que eles estão organizados alfabeticamente para facilitar a localização.

// Tarefa: Utilize o readline para capturar o nome e a quantidade de vários produtos, 
        // Adicione esses produtos a um array, Filtre os produtos para remover aqueles cuja quantidade seja zero, 
        // Organize os produtos restantes alfabeticamente por nome, Exiba o array final de produtos.

const ler = require('readline-sync');

let produtos = [];
let check    = true;

while(check){
    let produto = ler.question(`Informe o produto: `);
    let qtde    = ler.questionInt(`Informe a quantidade do produto informado: `);
    produtos.push({produto: produto, qtde: qtde});

    let x = ler.question("Produto cadastrado! 'Enter' para cadastrar novo produto ou 'sair' para finalizar: ").toLowerCase();
    if(x === 'sair') {
        check = false;
    }
}
console.table(produtos);

let produtosFil = produtos.filter(qtd => qtd.qtde > 0); 
console.table(produtosFil);

let produtosAlfa = produtosFil.sort((a, b) => a.produto.localeCompare(b.produto));
console.table(produtosAlfa);