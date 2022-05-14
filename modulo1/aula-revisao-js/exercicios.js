// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
let array1Exercicio1 = ["Azul", "Amarelo", "Vermelho"]
let array2Exercicio1 = [1,2,3,4,5,6,7,8,9,10]

function retornaTamanhoArray(array) {
     return array.length
    }

console.log(retornaTamanhoArray(array1Exercicio1))
console.log(retornaTamanhoArray(array2Exercicio1))



// EXERCÍCIO 02
let array1Exercicio2 = [1,2,3,4,5,6,7,8,9]
let array2Exercicio2 = ["A","B","c","D","E"]
function retornaArrayInvertido(array) {
  return array.reverse()
}
console.log(retornaArrayInvertido(array1Exercicio2))
console.log(retornaArrayInvertido(array2Exercicio2))
//Desafio
let novoArrayInvertido =[]
let contador = (array1Exercicio2.length -1) 
for (contador; contador != -1; contador -- ){
novoArrayInvertido.push(array1Exercicio2[contador])
}
//reverte o array invertido
console.log(novoArrayInvertido) 



// EXERCÍCIO 03

let array1Exercicio3 =["05","60","91","12","54","68","23"]
//achei esta função na internet, mas realmente não sei explicar o motivo de ordenar certo os números por conta dela....
function compararNumero (a,b){
    if(a>b) return 1;
    if (a<b) return -1;
    return 0
}
function retornaArrayOrdenado(array) {
  return array.sort(compararNumero)
 }
console.log(retornaArrayOrdenado(array1Exercicio3))

//Desafio
//não consegui pensar em alguma forma ainda

// EXERCÍCIO 04

let array1Exercicio4 =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
function retornaNumerosPares(array) {
    const arrayPares = array.filter(numerosPares =>(numerosPares % 2) ==0)
     return arrayPares
}
      console.log(retornaNumerosPares(array1Exercicio4))  

//Desafio
let novoArrayNumeroPares =[]
for (let item of array1Exercicio4){
    if((item % 2)==0)
    novoArrayNumeroPares.push(item)
}
  console.log(novoArrayNumeroPares)  

  

// EXERCÍCIO 05

let array1Exercicio5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numeroElevado = 0
let novoArrayParesElevados =[]

function retornaNumerosParesElevadosADois(array) {

    novoArrayParesElevados =[]
   for (let i = 0; i <= array.length; i++){
       if((array[i] % 2) == 0){
      numeroElevado = (array[i] ** 2)
      novoArrayParesElevados.push(numeroElevado)
    }
  }
return novoArrayParesElevados

}
console.log(retornaNumerosParesElevadosADois(array1Exercicio5))



// EXERCÍCIO 06

let array1Exercicio6 = [12,120,30,4,8,80,62]
function retornaMaiorNumero(array) {
  array.sort(compararNumero)
  return array[(array.length - 1)]
}
console.log(retornaMaiorNumero(array1Exercicio6))



// EXERCÍCIO 07

let maiorNumero = 0
let maiorDivisivelPorMenor = false
let diferenca = 0

let arrayMaiorNumeroDiferenca = []

function retornaObjetoEntreDoisNumeros(num1, num2) {
if(num1 >= num2){
  maiorNumero = num1
  maiorDivisivelPorMenor = num1 % num2 == 0
  diferenca = num1 - num2
}
 else if (num1 < num2){
   maiorNumero = num2
   maiorDivisivelPorMenor = num2 % num1 == 0
   diferenca = num2 -num1
 }
 
 return {maiorNumero, maiorDivisivelPorMenor, diferenca}
}
console.log(retornaObjetoEntreDoisNumeros(30,15))
console.log(retornaObjetoEntreDoisNumeros(15,15))


 
// EXERCÍCIO 08

let arrayNNumerosPares = []
let numeroParEx8 = 0
let contadorEx8 = 0
function retornaNPrimeirosPares(n) {
  arrayNNumerosPares = []
  contadorEx8 = 0
  numeroParEx8 = 0
  for(contadorEx8; contadorEx8 < n; contadorEx8++){
arrayNNumerosPares.push(numeroParEx8)
      numeroParEx8 = numeroParEx8 + 2
  }
  return arrayNNumerosPares
}
console.log(retornaNPrimeirosPares(3))
console.log(retornaNPrimeirosPares(5))



// EXERCÍCIO 09

let mensagemTriangulo = " "
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if(ladoA == ladoB && ladoB == ladoC){
mensagemTriangulo = "Equilátero"
  }
else if( ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
  mensagemTriangulo = "Isósceles"
}
else{
  mensagemTriangulo = "Escaleno"
}
return mensagemTriangulo
}
console.log(classificaTriangulo(10,10,2))
console.log(classificaTriangulo(10,11,12))
console.log(classificaTriangulo(12,12,12))




// EXERCÍCIO 10

let array1Exercicio10 = [15,55,1,3,80,90,54,100,45]
let novoArraySegundoMenorMaior = []

function retornaSegundoMaiorESegundoMenor(array) {
  novoArraySegundoMenorMaior = []
  array.sort(compararNumero)
  
  novoArraySegundoMenorMaior.push(array[(array.length -2)])
  novoArraySegundoMenorMaior.push(array[1])
  
  
  return novoArraySegundoMenorMaior
}
console.log(retornaSegundoMaiorESegundoMenor(array1Exercicio10))




// EXERCÍCIO 11

let objetoFilme ={
  nome: "O Diabo Veste Prada",
  ano: 2006,
  diretor: "David Frankel",
  atores:["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
let mensagemFilme = " "

function retornaChamadaDeFilme(filme) {
  mensagemFilme = " "
mensagemFilme = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
   
return mensagemFilme
}

console.log(retornaChamadaDeFilme(objetoFilme))


// EXERCÍCIO 12

let objetoPessoa = {
  nome: "Astrodev",
  idade: 25,
  email: "astrodev@labenu.com.br",
  endereco: "Rua do Futuro, 4"
}
let objetoPessoa2 = {
  nome:"Chijo",
  idade: 27,
  email:"chijo@labenu.com.br",
  endereco:"Rua dos Bobos, 0"
}
function retornaPessoaAnonimizada(pessoa) {
   pessoa.nome = "ANÔNIMO"  
       
   return pessoa
}
console.log(retornaPessoaAnonimizada(objetoPessoa))
console.log(retornaPessoaAnonimizada(objetoPessoa2))



// EXERCÍCIO 13A

let arrayCriancasParque = [
{nome: "Paula", idade: 12, altura: 1.8},
{ nome: "João", idade: 20, altura: 1.3},
{ nome: "Pedro", idade: 15, altura: 1.9},
{ nome: "Luciano", idade: 22, altura: 1.8},
{ nome: "Artur", idade: 10, altura: 1.2},
{ nome: "Soter", idade: 70, altura: 1.9}]

function retornaPessoasAutorizadas(pessoas) {
  let arrayCriancasQuePodem = pessoas.filter(requisitos =>
    (requisitos.altura >= 1.5 && requisitos.idade > 14 && requisitos.idade<60))
    return arrayCriancasQuePodem
}
console.log(retornaPessoasAutorizadas(arrayCriancasParque))

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let arrayCriancasQueNaoPodem = pessoas.filter(requisitos =>
    (requisitos.altura < 1.5 || requisitos.idade <= 14 || requisitos.idade >60))
    
    return arrayCriancasQueNaoPodem
}
console.log(retornaPessoasNaoAutorizadas(arrayCriancasParque))


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}