// Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.question('Qual o tamanho do primeiro segmento de reta? ', (a) => {

    const segmento1 = parseInt(a);

    rl.question('Qual o tamanho do segundo segmento de reta? ', (b) => {

        const segmento2 = parseInt(b);

        rl.question('Qual o tamanho do terceiro segmento de reta? ', (c) => {

            const segmento3 = parseInt(c);

            if (
                segmento1 < segmento2 + segmento3 && 
                segmento2 < segmento1 + segmento3 && 
                segmento3 < segmento1 + segmento2
            ) { console.log('É possível formar um triângulo com essas retas.') }
            
            else { console.log('Não é possível formar um triângulo com essas retas.') }

            rl.close();
        });
    });
});
