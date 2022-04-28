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

    */