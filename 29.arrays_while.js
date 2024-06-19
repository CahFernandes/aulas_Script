// Capturando dados do ususário e exibindo os dados com o while e mostrando com o for

const ler = require('readline-sync');

let frutas = [];
let check  = true;

while (check) {
    let fruta = ler.question("Informe o nome de uma fruta ou digite 'sair' para finalizar: ").toLowerCase();

    if(fruta == "sair") {
        check = false;
    } else {
        frutas.push(fruta);
    }
}

for (let i = 0; i < frutas.length; i++) {
    console.log(`=> ${frutas[i]}`);        
}
