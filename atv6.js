// Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const verificaNumero = (numero, numeroSorteado) => {
    return numero == numeroSorteado;
};

const fazerPergunta = () => {

    rl.question('Digite um número entre 1 e 5: ', (numero) => {

        if (verificaNumero(numero, numeroSorteado)) {

            console.log('Você acertou!');
            rl.close();
        } 
        
        else {
            
            console.log('Você errou! Tente novamente.');
            fazerPergunta();
        }
    });
};

const numeroSorteado = Math.floor(Math.random() * 5) + 1;

console.log('Jogo iniciado! Tente adivinhar o número sorteado entre 1 e 5.');

// Inicia o jogo
fazerPergunta();