
/*Exercício Aula - Variáveis

1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    let a = 10
    let b = 10
    
    console.log(b)
    
    b = 5
    console.log(a, b)

    Resposta:
    O console deverá mostrar:
    10 5 


2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.    
    let a = 10
    let b = 20
    c = a
    b = c
    a = b

    console.log(a, b, c)

    Resposta:
    O console deverá mostrar:
    10 10 10


3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.
    let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${t/p} por hora`)
    
    Resposta:
    p -> HorasTrabalhadas
    t -> ValorDiario    
    */ 

//Exrcício de Escrita de Código

//1. A -
let NomeNulo

//1. B -
let IdadeNula

//1. C -
console.log(typeof IdadeNula, typeof NomeNulo)

//1. D - Apesar do nome das variáveis sugerirem uma Strng e um Número, enquanto não for atribuído um valor a ela ela sempre será nula ou indefinida

//1. E -
let Nome = prompt("Qual seu Nome?")
let Idade = prompt("Qual sua Idade?")

//1. F -
console.log(typeof Nome, typeof Idade)

//Apesar da idade ser escrita em número, como ela foi recebida do prompt ela foi atribuida como uma String, portanto caso for necessário somar um número atribuido pelo prompt, é necessário converter a String para Número antes.

console.log("Olá", Nome, "você tem", Idade, "anos.")


//2. A -
let Pergunta01 = prompt("Você está empolgado com o curso de programação?")
let Pergunta02 = prompt("Você está com dificuldades com a introdução à lógica de programação?")
let Pergunta03 = prompt("Você vai praticar bastante o que foi aprendido para consegui acompanhar o restante do curso?")

//2. B -
console.log("Você está empolgado com o curso de programação? - ", Pergunta01)
console.log("Você está com dificuldades com a introdução à lógica de programação? - ", Pergunta02)
console.log("Você vai praticar bastante o que foi aprendido para conseguir acompanhar o restante do curso? - ", Pergunta03)

//3.
let a = 10
let b = 25

//Lógica  da troca de valores
let Repositorio = a
a = b
b = Repositorio

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 



//Exercíco do Desafio

let x = prompt("Primeiro Número")
let y = prompt("Segundo Número")

let Soma = Number(x) + Number(y)
let Mult = Number(x) * Number(y)

console.log("A soma de",x, "+", y, "é igual a: ", Soma)
console.log("A Multiplicação de",x, "X", y, "é igual a: ", Mult)