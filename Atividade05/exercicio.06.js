// Data:  21/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 06: Lista de Compras
            // Contexto: Você está organizando uma lista de compras para preparar um jantar especial. 
            // No entanto, você quer garantir que sua lista esteja organizada alfabeticamente para facilitar a busca enquanto você está no supermercado.
            // Tarefa: Crie um array com os itens: "Tomates", "Queijo", "Pão", "Cebolas", "Maçãs", Use o método sort para organizar a lista alfabeticamente, Exiba a lista ordenada.

let lista = ["Tomates", "Queijo", "Pão", "Cebolas", "Maçãs"]
let lista_Ord  = lista.sort((a, b) => a.localeCompare(b));

console.table(lista_Ord);