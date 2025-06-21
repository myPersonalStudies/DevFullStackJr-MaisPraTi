// Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual a distância que você deseja percorrer em Km? ', (d) => {

    const distancia = parseInt(d);
    let preco;

    if (distancia <= 200) { preco = distancia * 0.50 }

    else { preco = distancia * 0.45 }

    console.log(`O preço da passagem é R$ ${preco}.`);

    rl.close();
})