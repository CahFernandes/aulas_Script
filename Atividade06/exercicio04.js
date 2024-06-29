// Data:  27/06/2024
// Autor: Camila Mauricio Fernandes Costa
// Descrição: Exercicio 04 - Implemente um sistema básico de recomendação para um serviço de streaming. 
            // Crie uma matriz 3x3 onde cada linha representa um usuário e cada coluna representa uma classificação para diferentes categorias de filmes. 
            // Use loops for para sugerir novos filmes aos usuários com base em suas classificações mais altas.

const ler = require('readline-sync');

const matriz = [];
let cont = 1;
for (let i = 0; i < 3; i++){
    matriz[i] = [];
    for (let j = 0; j < 3; j++){
        matriz[i][j] = cont;
        cont++; 
    }
}
console.log(matriz);



// let matriz = [
//     {"Joao"}
// ];