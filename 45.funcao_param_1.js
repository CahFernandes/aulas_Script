// Trabalhando com funções no JavaScript - Utilizando Parâmetros

// function dobro(num) {
//     let result = num * 2;
//     console.log("O dobro do número informado é " + result);
// }
// dobro(6);


function dobro(num) {
    return "O dobro do número informado é " + num * 2;
}
console.log(dobro(6));


function contar_txt(txt) {
    total = txt.length;    
    console.log(`O texto ou palavra digitada contém ${total} caracteres.`);
}
contar_txt("Era uma vez em Nova Lima... ");

let texto = "Era uma vez em Nova Lima.";
contar_txt(texto);
