// Exibindo as informações de um objeto/array com loop FOR EACH IN OF 

let produtos = [
    {nome: "Teclado USB", preco: 99.99, quantidade: 3},
    {nome: "Mouse sem fio", preco: 59.99, quantidade: 5},
    {nome: "Monitor LED 24 polegadas", preco: 899.00, quantidade: 2},
    {nome: "Cadeira Gamer", preco: 799.90, quantidade: 1},
    {nome: "Notebook Dell", preco: 3499.00, quantidade: 4},
    {nome: "Caixa de Som Bluetooth", preco: 149.99, quantidade: 6},
    {nome: "Impressora Multifuncional", preco: 499.00, quantidade: 2},
    {nome: "HD Externo 1TB", preco: 299.90, quantidade: 3},
]

// Nomes dos produtos com valores maiores que 500 reais
produtos.forEach(produto => {
    if(produto.preco > 500.00) {
        console.log(`Produto: ${produto.nome} - valor: ${produto.preco}`);
    }    
});

console.log("");
console.log("-----------------------------------------------");
console.log("");

// Nomes dos produtos com valor menor que 300, a soma total de cada um e o valor geral
let soma, total = 0;
for (let produto in produtos) {
    if (produtos[produto].preco < 300) {
        soma   = produtos[produto].preco * produtos[produto].quantidade;
        total += soma;   
        console.log(`Produto: ${produtos[produto].nome} - Total do Produto: ${soma.toFixed(2)}`);
    }
}

console.log(`Valor total geral: ${total.toFixed(2)}`);

console.log("");
console.log("-----------------------------------------------");
console.log("");

// Nome dos produtos maiores que 800 e com quantidade no estoque menor que 3
for (let produto of produtos) {
    if(produto.preco > 800 && produto.quantidade < 3){
        console.log(`=> Produto: ${produto.nome} - Quantidade: ${produto.quantidade} - Valor: ${produto.preco}`);
    }    
}
