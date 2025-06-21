// Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quantos cigarros você fuma por dia? ', (cigarrosPorDia) => {

  rl.question('Há quantos anos você fuma? ', (anosFumando) => {

    const diasFumando = parseInt(anosFumando) * 365;
    const cigarrosFumados = parseInt(cigarrosPorDia) * diasFumando;
    const minutosPerdidos = cigarrosFumados * 10;

    // 1 dia = 24 horas = 1440 minutos
    const diasPerdidos = minutosPerdidos / 1440;

    console.log(`Você perdeu ${diasPerdidos.toFixed(2)} dias de vida.`);

    rl.close();
  });
});