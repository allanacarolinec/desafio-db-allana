const readline = require('readline-sync');
const Forca = require('./forca');
var palavraCorreta = 'abacaxi';
const jogo = new Forca(palavraCorreta);

while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
    const chute = readline.question("Aguardando chute: \n");
    jogo.chutar(chute, palavraCorreta);
    console.log(jogo.buscarDadosDoJogo());
}

console.log("você " + jogo.buscarEstado());
