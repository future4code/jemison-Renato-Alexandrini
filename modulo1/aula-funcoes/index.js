//Exercícios de interpretação de código

/*1.Leia o código abaixo

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?
b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`?
O que apareceria no console?

Resposta:

a)10
  50 

b) Talvez dê erro no código, ou não vai aparecer nada, pois o apesar da operação matemática ter sido realizada,
ela não vai ter onde ser exibida.


2.Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade
b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`

Resposta:

a) a função vai pegar a frase escrita pelo usuário, vai tranformar tudo em letras minúsculas e
vai comparar se na frase existe o conjunto de letras "cenoura"

b)as três frases irão retornar True como resposta, pois todas contêm o conjunto de letras "cenoura",
mesmo tendo uma com a letra S após o conjunto, retornando True até mesmo se houvessem mais letras antes ou depois do conjunto.
*/

/* Exercícios de escrita de código

1.Escreva as funções explicadas abaixo:

a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number),
a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

Resposta:
*/

//a)
function funcaoFraseCompleta() {
console.log("Eu sou Renato, tenho 34 anos, moro em São Paulo e sou editor de vídeo")
}


//b)

function funcaoFraseCompletaDoUsuario(nome, idade, endereco, profissao){
    
nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")
endereco = prompt("Digite seu endereco")
profissao = prompt("Digite sua profissão")

return console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
}

funcaoFraseCompletaDoUsuario()

/* 2.Escreva as funções explicadas abaixo:

a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas
e retorne o resultado. Invoque a função e imprima no console o resultado.
b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é
**maior ou igual** ao segundo.
c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem,
juntamente com uma versão dela em letras maiúsculas.

Resposta
*/

//a)
 function soma(num1, num2){

    num1 = prompt("Digite o primeiro número")
    num2 = prompt("Digite o segundo númeor")
    let result = Number(num1) + Number(num2)

    return (`a soma de ${num1} e ${num2} é igua a ${result}`)
 }

 console.log(soma())

 //b)
 function maiorQ(num1, num2){

    num1 = prompt("Digite o primeiro número")
    num2 = prompt("Digite o segundo número")
    let maiorOuIgual = Number(num1) >= Number(num2)

    return (`O número ${num1} é maior ou igua a ${num2}: ${maiorOuIgual}`)
 }

 console.log(maiorQ())

 //c)
 function numeroPar(num1){
     num1 = prompt("Insira um número")
     numPar = Number(num1) % 2 == 0 
    return (`O número ${num1} é par:${numPar}`)
    }

    console.log(numeroPar()) 


//d)
 function alterarTexto(fraseDoUsuario) {
     fraseDoUsuario = prompt("Digite uma frase")

 let textoMaisculo = fraseDoUsuario.toUpperCase()  
 let tamanhoFrase = fraseDoUsuario.length
     return console.log(`o texto ${textoMaisculo} possui ${tamanhoFrase} caracteres`)
 } 
alterarTexto()



/*3.Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida,
 peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.
 Por fim, mostre no console o resultado das operações:

Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10

Resposta:
*/
let num1 = prompt("digite o primeiro número")
let num2 = prompt("digite o segundo número")
    
function soma1(num1,num2){
    
   let sum = Number(num1) + Number(num2)
   return sum 
}

function subtracao(){
   
   let sub = Number(num1) - Number(num2)
   return sub 
}

function multiplicacao(){
   
   let mult = Number(num1) * Number(num2)
   return mult 
}

function divisao(){
   let div = Number(num1) / Number(num2)
   return div 
}
console.log("soma = ", + soma1(num1, num2))
console.log("subtração = ", + subtracao(num1, num2))
console.log("multiplicação = ", + multiplicacao(num1, num2))
console.log("divisão = ", + divisao(num1, num2))



/* Desafios

1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código
 através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
    b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.**
     Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

    Resposta*/ 


    const imprime = (resultado)=> console.log(resultado)

    const somaNumeros = ()=>{
       num1 = prompt("Digite o primeiro número")
       num2 = prompt("Digite o segundo número")
    
    let resultado = Number(num1) + Number(num2)
    
       imprime(resultado)
    }
    
    somaNumeros()



/*2.Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa.
Retorne este valor, invoque a função e imprima o resultado no console.

Resposta:
*/

const calculaHipotenusa = (cat1,cat2)=>{
         
    hip = Math.sqrt(Number(cat1 * cat1) + Number(cat2 * cat2))
    
    return hip
}

let cat1 = prompt("Insira o primeiro cateto")
let cat2 = prompt("Insira o segundo cateto")

console.log(calculaHipotenusa(cat1,cat2))
