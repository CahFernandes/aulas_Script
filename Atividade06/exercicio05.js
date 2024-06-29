// Data:  28/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 05 - Crie um objeto representando um carrinho de compras. 
            // Cada chave do objeto é uma categoria de produto e o valor é um array de objetos representando produtos (nome, preço, quantidade). 
            // Use for in e for of para calcular o total por categoria e o total geral.

let valor_categ = [];
let valor = 0;
let total_geral = 0;
let total_categ = 0;

let carrinho = [
      [{categoria: "verduras"},[{nome:"alface",preco: 1.99,qtde: 3},{nome:"couve-flor", preco: 8.90, qtde: 2},{nome:"brocolis", preco: 5.99, qtde: 4}]],
      [{categoria: "frutas"}, [{nome:"banana",preco: 3.99,qtde: 5},{nome:"maca", preco: 7.99, qtde: 7},{nome:"laranja", preco: 2.99, qtde: 10}]],
      [{categoria: "laticinio"}, [{nome:"iogurte",preco: 3.50,qtde: 7},{nome:"queijo minas", preco: 54.99, qtde: 3},{nome:"leite", preco: 3.45, qtde: 8}]],
      [{categoria: "bebidas"}, [{nome:"suco",preco: 5.99,qtde: 4},{nome:"agua tonica", preco: 2.59, qtde: 12},{nome:"cerveja", preco: 3.99, qtde: 12}]]
]

// crio um array com a informação do valor total por categoria
for (let i = 0; i < carrinho.length; i++) {
    for (valor of carrinho[i][1]) {
        total_categ += valor.preco;     
    }

    //cria um array da categoria com o total por categoria
    valor_categ.push({categoria: carrinho[i][0].categoria, preco: total_categ.toFixed(2)});
    
    // busca o valor total do carrinho
    total_geral += total_categ;        
}

console.table(valor_categ);
console.log(`O valor total do carrinho é: ${total_geral}.`);
