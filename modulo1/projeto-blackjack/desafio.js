/**
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

//função para verificar cartas e valores
let displayCartas = ""
let somaDasCartas = 0
const verificarCartas = () =>{
   for(carta of jogador){
      displayCartas = + jogador.texto + " "
   for(carta of jogador){
      somaDasCartas = + jogador.valor

      return displayCartas, somaDasCartas
}}}
verificarCartas(jogador)

      while(somaDasCartas < 21){ confirm(`você possui ${displayCartas}, um total de ${somaDasCartas} \n 
      o computador possui: ${computador[0].texto} \n Deseja comprar uma nova carta`)
        jogador.push(comprarCarta())
        verificarCartas() 
}
      console.log(displayCartas, somaDasCartas)