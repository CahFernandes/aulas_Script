// Entrada de dados do Usuário

const { log } = require('console');
const readline = require('readline');
const ler = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout 
    }
);

ler.question("Digite um número: ", (num1) => 
    {
        ler.question("Digite outro número: ", (num2) => 
            {
                let soma = parseInt(num1) + parseInt(num2);
                console.log("O resultado da soma é " + soma);
                
                ler.close();
            }
        );
    }
);
