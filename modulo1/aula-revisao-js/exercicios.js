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
    const arrayPares = array.filter(numerosPares =>(numerosPares % 2) ==0);
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
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}