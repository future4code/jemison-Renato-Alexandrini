//Exercícios da Aula de Strings e Arrays

/* 1.Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)
  

Respostas:

a)Irá dar um erro ou não vai retornar nenhum valor, pois no caso do exemplo,
ao declarar o array deverá ser lido como uma variável qualquer e não como um array de fato.

b) b.null - pois a variável de nome array recebeu nulo como atribuição.

c) c.11 - pois a variável array recebeu um array contendo 11 números.

d) d.3 - pois como a variável i recebeu 0, o comando do console solicitou a primeira entrada do array.

e) e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13 - a segunda ocorrência da variável com nome de array 
foi atribuida a ela o número 19 e o restante do array continua igual a parte anterior do exercício

f) f. 9 - pois a vaiável valor foi atribuida a ela o sétimo número contido no array.


2. Leia o código abaixo com atenção 

const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

Resposta:

O resultado verá ser: SUBI NUM ÔNIBUS EM MIRROCOS 27 - pois substituiu as letras "A" por "I" e no final solicitou o tamanho total da variável frase.
*/

/* Exercícós de escrita de códigos

1.1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

    Resposta:
    */

    let nome = prompt("Insira seu nome")
    let email = prompt("Insira seu email")

    console.log(`O email ${email} foi cadastrado com sucesso. Seja bem vindo ${nome} !`)
 
    /*2.2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
        a) Imprima no console o array completo
        b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
        c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

        Resposta:
        */

        let comidas = ["churrasco", "feijoada", "macarrão", "pizza", "lanche"]

        console.log(comidas[0])
        console.log(comidas[1])
        console.log(comidas[2])
        console.log(comidas[3])
        console.log(comidas[4])

        let alteraComida = prompt("Qual sua comida favorita?")

        comidas[1] =alteraComida

        console.log(comidas[0])
        console.log(comidas[1])
        console.log(comidas[2])
        console.log(comidas[3])
        console.log(comidas[4])


/*3. Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c) Imprima o array no console
d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array no console

Resposta:
*/

let listaDeTarefas =[]

let tarefa1 = prompt("insira sua primeira tarefa")
let tarefa2 = prompt("insira sua segunda tarefa")
let tarefa3 = prompt("insira sua terceira tarefa")

listaDeTarefas[0] =tarefa1
listaDeTarefas[1] =tarefa2
listaDeTarefas[2] =tarefa3

console.log(listaDeTarefas)

let removeTarefa = prompt("insira o número de uma das tarefas realizadas 1, 2 ou 3")


listaDeTarefas.splice((removeTarefa -1), 1)

console.log(listaDeTarefas)

/*Desafio

1.Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

Resposta:
*/

let frase = prompt("Digite uma frase")
 let array1 = frase.split(" ")
 console.log(array1)


 /*2.Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi
 e imprime tanto o índice quanto o tamanho do array

 Resposta:
 */

let array2 = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let acharIndice = "Abacaxi"

console.log("O Abacaxi está na posição "+ array2.indexOf(acharIndice) + " e o array tem " + array2.length + " elementos.")