/* Exercícios Aula de Laços

Exercícios de interpretação de código

1.O que o código abaixo está fazendo? Qual o resultado impresso no console?
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

Resposta:

1.No código, enquanto o contador com nome "i" for menor que 5 ele vai somar 1 ao contador e verificar 
novamente, quando chegar a 5 ele vai imprimir o valor do contador (5) no console.

2.Leia o código abaixo:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) O que vai ser impresso no console?
b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

Respostas:

a)o código vai imprimir no console os número a partir do que for maior que 18, então será:19,21,23,25,27,30
b)O for each é o melhor laço para acessar cada ocorrência do array, seria necesário apenas adicionar a função de verificar o index do número, do lado do número que será impresso no console
console.log(numero,lista.indexOf(numero) )


3.Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

Resposta:

3. o código irá imprimir um contador de asteriscos até um número abaixo do digitado pelo usuário, no caso do número 4, ele deve ficar:
*
**
***



Exercícios de escrita de código


1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
   a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
   b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
   c) Por fim, imprima o array com os nomes dos bichinhos no console

   Resposta:
*/
let animais = []
 let numeroPets = Number(prompt("Digite a quantidade de animais de estimação"))

if(numeroPets == 0){
    console.log("Que pena! Você pode adotar um pet!")
}
else{ 
for (let contador = 0; contador != numeroPets; contador++){
    animais.push(prompt("Digite o nome do seu bichinho!"))
}}

console.log(animais)


/*2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números.
 Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
    a) Escreva um programa que **imprime** cada um dos valores do array original.
    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

    Respostas:
*/

let arrayOriginal  = [10,15,40,2,6,8,98,19,24,37]

//a)
for (let numero of arrayOriginal){
    console.log(numero)
}

//b)
for(let numeroDividio of arrayOriginal){
    console.log(numeroDividio / 10)
}

//c)
novoArray = []
for (let numeroPar of arrayOriginal){
    if(numeroPar % 2 == 0){
        novoArray.push(numeroPar)
    }
}
console.log(novoArray)

//d)
let menor = 100000
let maior = 0
for(testeMaiorEMenor of arrayOriginal){
if (testeMaiorEMenor < menor){
    menor = testeMaiorEMenor
}
for(testeMaiorEMenor of arrayOriginal){
    if (testeMaiorEMenor > maior){
        maior = testeMaiorEMenor
    }
}
}
console.log(`O maior número é ${maior} e o menor número é ${menor}`)


/* Desafios

1.Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando".
Ele deve ser jogado entre duas pessoas. 
Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio
o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

Um resumo das funcionalidades são:

a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:
- O número chutado, com a mensagem: `O número chutado foi: <número>`
- Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`
c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`

Resposta:
*/

if (confirm("Vamos Jogar?!")){

    let numeroEscolhido = Number(prompt("Digite o número que deverá ser adivinhado"))
   
    let numeroChutado 
    let contador = 0
   
    if(numeroChutado !=0){
    while(numeroChutado != numeroEscolhido){
        numeroChutado = prompt("Dê o seu palpite")
        contador ++
        if(numeroChutado < numeroEscolhido){
            console.log(`Errrrrrouuuu! \n o número é MAIOR!`)
        }
        else if(numeroChutado > numeroEscolhido)
            console.log(`Errrrrrouuuu! \n o número é MENOR!`)
        }
    
            console.log(`Acertouuuu!! o número é ${numeroEscolhido} e você acertou em ${contador} tentativas`)
}}

else{console.log("Fim de jogo")}


/*2.Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente. Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você
faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100)
e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
 
Resposta:
*/

if (confirm("Vamos Jogar?!")){

    let numeroEscolhidoAleatoriamente = Math.floor((Math.random() * 100) + 1);
   
    let numeroChutado2 = 0
    let contador2 = 0
   
    while(numeroChutado2 != numeroEscolhidoAleatoriamente){
        numeroChutado2 = prompt("Dê o seu palpite")
        contador2 ++
        if(numeroChutado2 < numeroEscolhidoAleatoriamente){
            console.log(`Errrrrrouuuu! \n o número é MAIOR!`)
        }
        else if(numeroChutado2 > numeroEscolhidoAleatoriamente)
            console.log(`Errrrrrouuuu! \n o número é MENOR!`)}
    
            console.log(`Acertouuuu!! o número é ${numeroEscolhidoAleatoriamente} e você acertou em ${contador2} tentativas`)
}
else{console.log("Fim de jogo")}
