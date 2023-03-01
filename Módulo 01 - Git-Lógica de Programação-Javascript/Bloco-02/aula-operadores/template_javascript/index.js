/*Exercícios de Interpretação de códigos

1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

Respostas:

a. false
b. false
c. true (pelo que entendi lendo a linha de código é que: afirmação está pedindo a comparação entre (bool1 || bool2) que é verdadeira)
         e a negativa da atribuição atual da variável resultado, portanto !false(que fica igual a true) && true = true.
         Acredito que não consegui explicar direito o que entendi na linha, mas caso esteja errado, gostaria de, se possível ser avisado.
d. boolean


2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

Resposta:
será impresso no console os dois número digitados em sequência, pois para somar números recebidos pelo prompt é necessário converter eles para a variável "Number" com Number().


3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

Resposta:

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)

*/


//Exercícios de escrita de código

/*1.Faça um programa que:
a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

Resposta:
*/

let IdadeUsuario = prompt("Digite sua idade")
let IdadeAmigo = prompt("Digite a idade do seu melhor amigo")

let DiferencaIdade = IdadeUsuario > IdadeAmigo
let ValorDiferencaIdade = Number(IdadeUsuario) - Number(IdadeAmigo)

console.log("Sua idade é maior do que a do seu amigo?", DiferencaIdade)
console.log ("A diferença de idades entre você seu amigo é de", ValorDiferencaIdade)


/*2. Faça um programa que:

a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

Resposta:
*/

let NumeroPar = prompt("Insira um número PAR")

let RestoDivisaoNumero = Number(NumeroPar) % 2

console.log("seu número escolhido, dividido por 2, possui um restante de", RestoDivisaoNumero)

//C. Todos os números pares divididos por 2 possuem o resto igual a 0

//D. Caso o usuário insira um número ímpar, a conta passara a ter um valor de resto maior que 0


/*3.Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
  
  a) A idade do usuário em meses

b) A idade do usuário em dias

c) A idade do usuário em horas

Resposta:
*/

let IdadeUsuario2 = prompt("Digite sua idade")

let IdadeMes = Number(IdadeUsuario2) * 12
let IdadeDia = IdadeMes * 30
let IdadeHora = IdadeDia * 24

console.log("Você possui", IdadeMes, "meses de vida - ", IdadeDia, "dias de vida  - e", IdadeHora, ("Horas de vida."))


/*4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

Resposta:
*/

let PrimeiroNumero = prompt("digite o primeiro número")
let SegundoNumero = prompt("digite o segundo número")

let MaiorQ = PrimeiroNumero > SegundoNumero
let NumeroIgual = PrimeiroNumero == SegundoNumero
let Divisivel1p2 = (Number(PrimeiroNumero) % Number(SegundoNumero)) == 0 
let Divisivel2p1 = (Number(SegundoNumero) % Number(PrimeiroNumero)) == 0

console.log("O primeiro número é maior que o segundo?", MaiorQ)
console.log("O primeiro número é igual ao segundo?", NumeroIgual)
console.log("O primeiro número é divisível pelo segundo?", Divisivel1p2)
console.log("O segundo número é divisível pelo primeiro?", Divisivel2p1)



//Desafio

/*1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C), 
 Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:

- Graus Fahrenheit(°F) para Kelvin(K)  
    ```
    (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
    ```    
- Graus Celsius(°C) para Graus Fahrenheit (°C)
        ```
    (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
    ```
    
a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter


Resposta:
*/


let FahreneitParaKelvin = (77 - 32)*(5/9) + 273.15

//a)
console.log("77º Fahrenheit convertidos para Kelvin é igual a", FahreneitParaKelvin,"ºK")

//b)
let CelsiusParaFahrenheit = 80 * (9/5) + 32

console.log("80ºC convertidos para Fahrenheit é igual a", CelsiusParaFahrenheit, "ºF")

//c)
CelsiusParaFahrenheit = 30 * (9/5) + 32
let CelsiusParaKenvin = 30 + 273.15

console.log("30ºC convertidos é igual a", CelsiusParaFahrenheit, "ºF - e ",CelsiusParaKenvin, "ºK")

//d)

let TempUsuario = prompt("Digite a temperatura em ºCelsius que deseja converter:")

CelsiusParaFahrenheit = Number(TempUsuario) * (9/5) + 32
CelsiusParaKenvin = Number(TempUsuario) + 273.15

console.log("a temperatura escolhida, convertida é igual a", CelsiusParaFahrenheit, "ºF - e ",CelsiusParaKenvin, "ºK")


/*2.Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências.
 Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

 a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

Respostas:
*/

//a)

let ValorQWH = 280 * 0.05

console.log("O valor gasto com 280QW/H é igua a", ValorQWH,"R$")


//b)
let DescontoQWH = ValorQWH - (ValorQWH * 0.15) 
console.log("O valor gasto com 280QW/H com desconto de 15% é igua a", DescontoQWH,"R$")


/*3.Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). 
Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:

a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
`20lb equivalem a X kg`
b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
`10.5oz equivalem a X kg`
c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
`100mi equivalem a X m`
d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
`50ft equivalem a X m`
e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
`103.56gal equivalem a X l`
f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
`450 xic equivalem a X l`
g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter


Resposta:
*/

//a)
let LbParaKg = 20 / 2.205

console.log("20Lbs equivalem a", LbParaKg, "Kg")

//b)
let OzParaKg = 10.5 / 35.247

console.log("10,5Oz equivalem a", OzParaKg, "Kg")

//c)
let MilhaParaMetro = 100 * 1609

console.log("100mi equivalem a", MilhaParaMetro, "m")

//d)
let FeetParaMetro = 50 / 3.281

console.log("50ft equivalem a", FeetParaMetro, "m")

//e)
let GalParaLitro = 103.56 * 3.806

console.log("103,56gal equivalem a",GalParaLitro , "l")

//f)
let XicaraParaLitro = 450 /3.52

console.log("450xic equivalem a",XicaraParaLitro , "l")

//g)
let Libras = prompt("Digite o valor em Libras")
LbParaKg = Number(Libras) / 2.205
console.log(Libras, "lbs equivalem a", LbParaKg, "Kg")

let Oz = prompt("Digite o valor em Onças")
OzParaKg = Number(Oz) / 35.247
console.log(Oz,"Oz equivalem a", OzParaKg, "Kg")

let Ml = prompt("Digite o valor em Milhas")
MilhaParaMetro = Number(Ml) * 1609
console.log(Ml, "mi equivalem a", MilhaParaMetro, "m")

let Feet = prompt("Digite o valor em pés")
FeetParaMetro = Number(Feet) / 3.281
console.log(Feet, "ft equivalem a", FeetParaMetro, "m")

let Gal = prompt("Digite o valor em galões")
GalParaLitro = Number(Gal) * 3.806
console.log(Gal, "gal equivalem a",GalParaLitro , "l")

let Xicara = prompt("Digite o valor em xícaras")
XicaraParaLitro = Number(Xicara) /3.52
console.log(Xicara, "xic equivalem a",XicaraParaLitro , "l")
