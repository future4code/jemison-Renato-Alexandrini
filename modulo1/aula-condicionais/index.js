/* Exercícios da Aula de Condicionais


Exercícios de interpretação de código

1.Leia o código abaixo:
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Explique o que o código faz. Qual o teste que ele realiza? 
b) Para que tipos de números ele imprime no console "Passou no teste"? 
c) Para que tipos de números a mensagem é "Não passou no teste"?

Respostas:

a)O teste verifica se o resto da divisão por dois, do número digitado pelo
usuário, ou seja ele testa se o número é par

b)Ele imprime "passou no teste", para os números pares

c)a mensagem de "não passou no teste", aparece quando o número digitado
for um número impar

2.O código abaixo foi feito por uma pessoa desenvolvedora, contratada para 
automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?
b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa
no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado 
pelo comentário "BREAK PARA O ITEM c.")?

Respostas:

a)O código recebe o nome de uma fruta e retorna o valor atribuido a ela pela propriedade "preco"

b) será impreso:
O preço da fruta Macã é R$ 2.25

c)Se o código não der erro por conta do número padrão atribuido no final do case,
acredito que ele vá atribuir o valor padrão a fruta Pêra, pois sem o break; ele vai deixar
de reconhecer como um item do case.


3.Leia o código abaixo:
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

Respostas:

a)A linha está recebendo um número digitado pelo usuário e convertendo ele de String para número
já que todo input do prompt é recebido como uma String

b)Se o código não der erro por cota da varível "mensagem", abaixo da primeira mensagem,
acredito que com o número 10 deverá imprimir no console a primeira frase e no caso do 
-10 não deverá retornar nada , ou indefinido

c)Acredito que possa haver um erro por conta da variável "mensagem" estar sendo declarada
dentro da função da condição if(numero > 0), mas ela está sendo chamada fora das {} da condição.
Talvez um return mensagem possa corrigir ou apenas remover ela de dentro das {} da condição.
*/


/*Exercícios de escrita de código

1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir
(apenas maiores de idade).
a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim,
imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`


Resposta:
*/

let idade = Number(prompt("digite sua idade"))

if (idade >= 18){
    console.log("Você pode dirigir")
}
    else{
    console.log ("Você não pode dirigir")
    }


    /*2.Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar
    M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!"
    ou "Boa Noite!". Utilize o bloco if/else

    Resposta:
    */

    let turnoEstudo = prompt("digite a letra correspondente ao turno que estuda: Matutino(M), Vespertino(V) ou Noturno(N)")

    if(turnoEstudo.toUpperCase() == "M"){
        console.log("Bom dia!")
    }
    else if(turnoEstudo.toUpperCase() == "V"){
        console.log("Boa tarde!")
    }
    else if (turnoEstudo.toUpperCase() == "N"){
        console.log("Boa noite!")
    }

    
    /*3.Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

    Resposta:
    */

    let turnoEstudoSwitch = prompt("digite a letra correspondente ao turno que estuda: Matutino(M), Vespertino(V) ou Noturno(N)").toUpperCase()

    switch(turnoEstudoSwitch) {
        case "M":
            console.log("Bom dia!")
            break
        case "V":
            console.log("Boa tarde!") 
            break
        case "N":
            console.log("Boa noite!")
            break
        default:
            console.log("Turno não encontrado")           
    }


    /*4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá
     a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. 
     Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta 
     sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme.
      Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`
      
      Reposta:
     */  

let generoFilme = prompt("digite o gênero do filme").toUpperCase()
let valorIngresso = Number(prompt("Digite o valor do ingresso"))

if(generoFilme == "FANTASIA" && valorIngresso < 15){
    console.log("Bom filme!")
}
else{
     console.log("Por favor, escolha outro filme :(")
    }



    /*Desafios
    1.Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!",
    pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc)
    e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

    Resposta:
    */

let generoFilmeNovo = prompt("digite o gênero do filme").toUpperCase()
let valorIngressoNovo = Number(prompt("Digite o valor do ingresso"))


if(generoFilme == "FANTASIA" && valorIngresso < 15){
    let lanchinho = prompt("insira o lanche que será adquirido com o ingresso")

    console.log("Bom filme")
    console.log(`Aproveite seu/sua ${lanchinho} !`)  
  }
else{
     console.log("Por favor, escolha outro filme :(")
    }


    /*2.Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra,
    o usuário deve fornecer algumas informações:
      - Nome completo;
      - Tipo de jogo: IN indica internacional; e DO indica doméstico;
      - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
      - Categoria: pode ser as opções 1, 2, 3 ou 4;
      - Quantidade de ingressos
      O seu sistema deve solicitar estas informações ao usuário, através do prompt.
      Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso 
      e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado
      pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
      Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

      Resposta:
      */


      let nomeEspectador = prompt("Digite seu nome completo")
      let localJogo =prompt("Escolha o tipo de jogo, IN para internacional e DO para doméstico").toUpperCase()
      let etapaDoJogo = prompt("Escolha a etapa do jogo, SF para semi-final, DT para decisão de terceiro lugar e FI para as finais").toUpperCase()
      let categoriaJogo = Number(prompt("Escolha uma categoria entre 1, 2, 3 ou 4"))
      let quantidadeDeIngressos = Number(prompt("Escolha a quantidade de ingressos"))

      valorIngressoJogo = (localJogo) =>{
        if (localJogo == "IN"){
          multiplicadorValor = 4.10
          nomeLocalJogo = "Internacional"
          return multiplicadorValor, nomeLocalJogo
        }
        else if (localJogo == "DO"){
          multiplicadorValor = 1
          nomeLocalJogo = "Doméstico"
          return multiplicadorValor, nomeLocalJogo
        }
        else{
          console.log("Escolha uma opção entre Internacional(IN) ou Doméstico(DO)!")
          }
      }
      
      valorIngressoJogo(localJogo)
      
      escolhaDaEtapaJogo = (etapaDoJogo) =>{
        if(etapaDoJogo == "SF"){
          etapaEscolhida = 0
          nomeEtapaJogo = "Semi FInais"
          return etapaEscolhida, nomeEtapaJogo
        }
        else if (etapaDoJogo == "DT"){
          etapaEscolhida = 4
          nomeEtapaJogo = "Disputa de Terceiro lugar"
          return etapaEscolhida, nomeEtapaJogo
      }
      else if (etapaDoJogo == "FI"){
        etapaEscolhida = 8
        nomeEtapaJogo = "Finais"
        return etapaEscolhida, nomeEtapaJogo
    }
    }
     escolhaDaEtapaJogo(etapaDoJogo)

     let valoresDosJogos = Number(etapaEscolhida + categoriaJogo)
     switch (valoresDosJogos){
       case 1:
        valorRealIngresso = 1320
          break
       case 2:
        valorRealIngresso = 880
          break
       case 3:
        valorRealIngresso = 550
          break
       case 4:
        valorRealIngresso = 220
          break
       case 5:
        valorRealIngresso = 660
         break
       case 6:
        valorRealIngresso = 440
          break
       case 7:
        valorRealIngresso = 330
           break
        case 8:
         valorRealIngresso = 170
            break
        case 9:
         valorRealIngresso = 1980
           break
        case 10:
         valorRealIngresso = 1320
           break
        case 11:
          valorRealIngresso = 880
            break
        case 12:
          valorRealIngresso = 330
            break
              default:
                console.log("Insira as informações corretas")
     }
      

    let valorFinalCompra = (valorRealIngresso * multiplicadorValor) * quantidadeDeIngressos

    console.log(`Dados da compra:`)
    console.log(`nome do cliente: ${nomeEspectador}`)
    console.log(`tipo de jogo ${nomeLocalJogo}`)
    console.log(`Etapa do jogo: ${nomeEtapaJogo}`)
    console.log(`categoria do jogo ${categoriaJogo}`)
    console.log(`quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log(`Valor do ingresso ${valorRealIngresso}`)
    console.log(`Valor total da compra: ${valorFinalCompra}`)