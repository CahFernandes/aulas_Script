// Arrays e Objetos

let cliente = {
    nome: "Fulano", 
    idade: 34
};
console.log(`Nome: ${cliente.nome} - Idade: ${cliente.idade}`);

// Atribui uma nova chave e valor
cliente.telefone = "(31) 98833-0987";
console.log(`Nome: ${cliente.nome} - Idade: ${cliente.idade} - Telefone: ${cliente.telefone}`);

// deleta o valor da chave Idade 
delete cliente.idade;
console.log(`Nome: ${cliente.nome} - Idade: ${cliente.idade} - Telefone: ${cliente.telefone}`);

// Atualiza o valor setando a chave correspondente
cliente.nome = "Maria"
console.log(`Nome: ${cliente.nome} - Telefone: ${cliente.telefone}`);
