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

    let jogador = []
    let computador = []

    console.log("Bem vindo ao jogo de Blackjack")
  
if(confirm("Deseja iniciar uma nova rodada?")){
   jogador.push(comprarCarta())
   jogador.push(comprarCarta())
   computador.push(comprarCarta())
   computador.push(comprarCarta())
}
   else{console.log("Fim de Jogo")}

//embaralhar em caso de 2 ases iniciais -

while(jogador[0].valor + jogador[1].valor == 22 || computador[0].valor + computador[1].valor == 22){
   jogador.pop()
   jogador.pop()
   jogador.push(comprarCarta())
   jogador.push(comprarCarta())
   computador.pop()  
   computador.pop()
   computador.push(comprarCarta())
   computador.push(comprarCarta())
}

let somaCartas = 0
let pontosJogador = 0
let maoJogador = ""
let pontosComputador = 0
let maoComputador = ""

const calcularCartas = (array) =>{
for (carta of array){
   maoDeCartas = + jogador.texto
   somaCartas = +jogador.valor

   return maoDeCartas, somaCartas
}}

calcularCartas(jogador)
calcularCartas(computador)

while(somaCartas < 21){
if (confirm(`sua mão possui ${maoDeCartas} e um total de ${somaCartas} pontos \n 
o computador possui ${computador[0]} \n 
Deseja comprar uma nova carta?`)){

  jogador.push(comprarCarta())
  calcularCartas(jogador)
  pontosJogador = somaCartas
  maoJogador = maoDeCartas
}
else {
   computador.push(comprarCarta)
calcularCartas(computador)
pontosComputador = somaCartas
maoComputador = maoDeCartas
}
if (somaCartas >= 21){
   computador.push(comprarCarta)
calcularCartas(computador)
pontosComputador = somaCartas
maoComputador = maoDeCartas
}}

if(pontosJogador == pontosComputador){
   console.log(`Jogador: ${maoJogador} ${pontosJogador} \n
   computador: ${maoComputador} ${pontosComputador} \n
   Houve um empate`)
}
else if(pontosJogador <= 21 || pontosJogador > pontosComputador){
   console.log(`Jogador: ${maoJogador} ${pontosJogador} \n
   computador: ${maoComputador} ${pontosComputador} \n
   O Jogador ganhou!`)
}
else if(pontosComputador <= 21 || pontosComputador > pontosJogador){
   console.log(`Jogador: ${maoJogador} ${pontosJogador} \n
   computador: ${maoComputador} ${pontosComputador} \n
   O Jogador ganhou!`)
}