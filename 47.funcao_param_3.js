// Trabalhando com funções no JavaScript - Utilizando dois ou mais Parâmetros

// Sistema de conversão de Moedas
const ler = require('readline-sync');

(async() => {
    const { default: cor } = await import('chalk');
    
    const DOLAR = 5.50, EURO  = 6.05, LIBRA = 7.12, IENE = 0.033;


    function dolar(valor) { return valor / DOLAR; }
    function euro(valor)  { return valor / EURO;  }
    function libra(valor) { return valor / LIBRA; }
    function iene(valor)  { return valor / IENE;  }

    function converterMoeda(valor, moeda) {
        switch (moeda) {
            case '1':
                console.log(cor.green(`O valor convertido para dólar é `));
                console.log(cor.yellow(dolar(valor).toFixed(2)));
                break;
            case '2':
                console.log(cor.green(`O valor convertido para euro é `));
                console.log(cor.yellow(euro(valor).toFixed(2)));
                break;
            case '3':
                console.log(cor.green(`O valor convertido para libra é `));
                console.log(cor.yellow(libra(valor).toFixed(2)));
                break;
            case '4':
                console.log(cor.green(`O valor convertido para iene é `));
                console.log(cor.yellow(iene(valor).toFixed(2)));
                break;
            default:
                break;
        }
    }

    function menu() {
        let valor = ler.questionFloat("Informe um valor em Reais: ");
        console.log(cor.bgMagentaBright("--------------------- Menu de Cálculo ---------------------"));
        console.log(cor.magenta("-- Selecione qual moeda você deseja realizar a conversão -- "));
        console.log(cor.cyan("1- DÓLAR -------------- "));
        console.log(cor.cyan("2- EURO  -------------- "));
        console.log(cor.cyan("3- LIBRA -------------- "));
        console.log(cor.cyan("4- IENE  -------------- "));
        let opt = ler.question("=> ");

        converterMoeda(valor,opt);
    }

    menu();

})();


    

