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
 //  jogador.shift()
 //  jogador.pop()
 jogador =[]
   jogador.push(comprarCarta())
   jogador.push(comprarCarta())
 //  computador.shift()  
 //  computador.pop()
 computador = []
   computador.push(comprarCarta())
   computador.push(comprarCarta())
}

let maoJogador = " "
let somaJogador = 0

let maoComputador = " "
let somaComputador = 0

//const calcularCartasJogador = (jogador) =>{
for(let carta of jogador){
   maoJogador +=  carta.texto 
   somaJogador +=  carta.valor
}   //return maoJogador, somaJogador
   for(let carta of computador){
      maoComputador +=  carta.texto 
      somaComputador +=  carta.valor
   }
 let confirmador = 0
   while(somaJogador <= 21 && confirmador != 1){
if (confirm(`sua mão possui ${maoJogador} e um total de ${somaJogador} pontos \n 
o computador possui ${computador[0].texto} \n 
Deseja comprar uma nova carta?`)){
   maoJogador = " "
   somaJogador = 0
  jogador.push(comprarCarta())
  for(let carta of jogador){
   maoJogador +=  carta.texto 
   somaJogador +=  carta.valor
  }}
  else{ 
   maoComputador = " "
   somaComputador = 0
 computador.push(comprarCarta())
 for(let carta of computador){
    maoComputador +=  carta.texto 
    somaComputador +=  carta.valor
    confirmador = 1
    }}}

while(somaComputador <= 21){
maoComputador = " "
  somaComputador = 0
computador.push(comprarCarta())
for(let carta of computador){
     maoComputador +=  carta.texto 
   somaComputador +=  carta.valor
}}

if(somaJogador == somaComputador || somaJogador > 21 && somaComputador > 21){
   console.log(`Jogador: ${maoJogador} ${somaJogador} \n computador: ${maoComputador} ${somaComputador} \n Houve um empate`)
}
else if(somaJogador < 22 && somaJogador > somaComputador){
   console.log(`Jogador: ${maoJogador} ${somaJogador} \n computador: ${maoComputador} ${somaComputador} \n O Jogador ganhou!`)
}
else if(somaComputador < 22 && somaComputador > somaJogador){
   console.log(`Jogador: ${maoJogador} ${somaJogador} \n computador: ${maoComputador} ${somaComputador} \n O Computador ganhou!`)
}
