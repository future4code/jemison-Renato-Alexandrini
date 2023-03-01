/*
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    let jogadorBlackjack = []
    let computadorBlackjack = []

    console.log("Bem vindo ao jogo de Blackjack")

    if (confirm("Deseja iniciar uma nova rodada?")){
    jogadorBlackjack.push(comprarCarta())
    jogadorBlackjack.push(comprarCarta())
    computadorBlackjack.push(comprarCarta())
    computadorBlackjack.push(comprarCarta())

    } 
    else{console.log("Fim de jogo!")}

let maoJogadorBlackjack = jogadorBlackjack[0].valor + jogadorBlackjack[1].valor
let maoComputadorBlackjack = computadorBlackjack[0].valor + computadorBlackjack[1].valor

console.log(`Suas cartas são: ${jogadorBlackjack[0].texto} e ${jogadorBlackjack[1].texto}, você tem ${maoJogadorBlackjack} pontos \n 
As cartas do computador são: ${computadorBlackjack[0].texto} e ${computadorBlackjack[1].texto}, ele tem ${maoComputadorBlackjack} pontos`)

if(maoJogadorBlackjack == maoComputadorBlackjack){
   console.log("A Partida terminou empatada!")
}
else if(maoJogadorBlackjack > maoComputadorBlackjack){
   console.log("Parabéns você venceu a partida!")
}
else (console.log("Que pena, você perdeu. Boa sorte na Próxima!"))