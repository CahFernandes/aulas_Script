// Blocos de variáveis Locais e Globais

let num1 = 100; // variável Global
let num2 = 2;
{
    let num2 = 30; // variável Local
    console.log(num1);
    console.log(num2);

    {
        console.log(num2);
    }
    
}

console.log(num1);
console.log(num2);