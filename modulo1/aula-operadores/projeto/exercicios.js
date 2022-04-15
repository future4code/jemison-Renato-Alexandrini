// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 let altura =  prompt("insira a altur")
 let largura = prompt("insira a largura")

let areaRetangulo = Number(altura) * Number(largura)

console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = prompt("Insira o ano atual")
let anoDeNascimento = prompt("insira o Ano do seu nascimento")

let idadeAtual = Number(anoAtual) - Number(anoDeNascimento)
console.log(idadeAtual)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    // implemente sua lógica aqui
return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
 //"Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt("insira seu nome")
let idade = (prompt("insira sua idade"))
let email = prompt("insira seu email")

console.log("Meu nome é "+ nome +", tenho "+idade+" anos, e o meu email é "+email+".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let coresfavoritas = [prompt("digite uma cor"),prompt("digite uma segunda"), prompt("digite uma terceira cor")]

console.log(coresfavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array [0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
let arrayRepositorio = array[0]
let arrayTroca1 = array [0] = array[array.length-1]
let arrayTroca2 = array[array.length-1] = arrayRepositorio

return array 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

return string1.toUpperCase() == string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual2 = prompt("insira o ano atual")
  let anoDeNascimento2 = prompt("insira o ano em que nasceu")
  let emissaoRg = prompt("insira o ano de emissão de sua CNH")

  let idade2 = anoAtual2 - anoDeNascimento2
  let vencimentoRg = anoAtual2 - emissaoRg

  console.log((idade2 <= 20 && vencimentoRg >= 5) || (idade2 < 20 || idade2 <= 50 && vencimentoRg >=10) || (idade2 > 50 && vencimentoRg >=15))
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  return (Number(ano) % 400 == 0) || (Number(ano) % 4 == 0 != (Number(ano) % 100 == 0 && Number(ano) % 400 != 0))

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
let maior18 = prompt("Você tem mais de 18 anos?")
let ensimoMedioCompleto = prompt("Você possui o ensino médio completo?")
let disponibilidadeHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

console.log(maior18 == "sim" && ensimoMedioCompleto == "sim" && disponibilidadeHorario == "sim")
}