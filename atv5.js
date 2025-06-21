// Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function jogarJoKenPo() {

    rl.question('Escolha uma opção (pedra, papel ou tesoura): ', (opcao) => {

        const opcaoUsuario = opcao.toLowerCase();

        const opcoes = ['pedra', 'papel', 'tesoura'];

        const opcaoComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

        console.log(`Você escolheu ${opcaoUsuario} e o computador escolheu ${opcaoComputador}.`);

        if (opcaoUsuario === opcaoComputador) { console.log('Empate!') }
        
        else if (opcaoUsuario === 'pedra' && opcaoComputador === 'tesoura') { console.log('Você ganhou!') }
        
        else if (opcaoUsuario === 'papel' && opcaoComputador === 'pedra') { console.log('Você ganhou!') }
        
        else if (opcaoUsuario === 'tesoura' && opcaoComputador === 'papel') { console.log('Você ganhou!') }
        
        else { console.log('Você perdeu!') }

        rl.question('Deseja jogar novamente? (s/n) ', (resposta) => {

            if (resposta.toLowerCase() === 's') { 
                
                console.log('\n--- Novo jogo ---\n') 
                jogarJoKenPo();
            }
            
            else { 
                
                console.log('Obrigado por jogar!'); 
                rl.close() 
            }

        });
    });
}

jogarJoKenPo();
