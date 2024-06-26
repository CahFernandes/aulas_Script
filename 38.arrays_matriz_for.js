// Exibindo valores de uma matriz com FOR LOOP

let numeros = [
    [12, 7, 34, 19, 20],
    [10, 89, 21, 65, 66],
    [25, 35, 47, 17, 6],
    [15, 71, 52, 61, 41],
];

let sacolao = [
    ["Frutas", "Legumes"],
    ["Abacaxi", "Abobrinha"],
    ["Uva", "Batata"],
    ["Abacate", "Cebola"],
    ["Maçã", "Cenoura"],
    ["Banana", "Pimentão"],
];

// let dados = [
//     frutas = ["Abacaxi","Uva","Abacate","Maçã","Banana"],
//     legumes = ["Abobrinha", "Batata", "Cebola", "Cenoura", "Pimentão"] 
// ]

console.log(numeros.length);    // retorna a quantidade de linhas de uma matriz
console.log(numeros[0].length); // retorna a quantidade de itens daquela posição

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros[i].length; j++) {
        console.log(`Linha ${i} - Coluna ${j}: ${numeros[i][j]}`);           
    }    
}


for (let x = 0; x < sacolao[0].length; x++) {
    for (let y = 1; y < sacolao.length; y++) {
        console.log(`Coluna ${x} - Linha ${y}: ${sacolao[y][x]}`);           
    }    
}

