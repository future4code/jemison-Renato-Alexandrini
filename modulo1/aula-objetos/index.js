/* Exercícios de interpretação de código

1.Leia o código abaixo
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}
console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

a) O que vai ser impresso no console?
Resposta:

irá ser impresso:
Matheus Nachtergale - (que é a primeira ocorrência do array elenco)
Viriginia Cavendish - (que é a última ocorrência do array elenco)
Globo 14h - (que é a terceira ocorrência do array transmissoesHoje)

2.Leia o código abaixo
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}
const gato = {...cachorro, nome: "Juba"}
const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a) O que vai ser impresso no console?
b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
Resposta:

a)nome: Juca, idade: 3, raça: SRD
  nome: Juba, idade: 3, raça: SRD
  nome: Jubo, idade: 3, raça: SRD 

b) Ele faz uma cópia do objeto para ser armazenada em uma variável diferente do objeto original


3.Leia o código abaixo
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}
const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}
console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) O que vai ser impresso no console?
b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
Resposta:

a)acredito que será impresso indefinido ou dará um erro
b)Acredito o código não deva interpretar a palavra
 propriedade como as propriedades do objeto, imagino que deveria ser uma
 função existente ou até mesmo criada acima para realizar alguma interação.
 Porém caso funcione esse código, pode ser que ele crie um array com tudo o que está escrito
 na variável pessao e no final imprima tudo junto com a palavra adicionada no final.

Realmente não sei, vou aguardar a correção
*/


/*Exercícios de escrita de código

1. Resolva os passos a seguir: 
    
a) Crie um objeto. Ele deve conter duas propriedades: nome (string)
e apelidos (um array que sempre terá exatamente **três apelidos**).
Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**

b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos.
Depois, chame a função feita no item anterior passando como argumento o novo objeto

Resposta:
*/

//a)
const pessoa = {
    nome: "Renato",
    apelido: ['re', 'fininho', 'renatão']
}

const funcaoImprimePessoa = (pessoa) => {
    console.log(pessoa.nome, pessoa.apelido)
}

funcaoImprimePessoa(pessoa)

//b)
const pessoaSegunda = {
    ...pessoa,
    apelido: ["renatinho", "nato", "natão"]
}

funcaoImprimePessoa(pessoaSegunda)


/*2.2. Resolva os passos a seguir: 
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
        1. O valor de `nome`
        2. O numero de caracteres do valor `nome`
        3. O valor de `idade`
        4. O valor de `profissão`
        5. O numero de caracteres do valor `profissão`

Resposta:
*/

const pessoa1 = {
    nome: "Valquiria",
    idade: 36,
    profissao: "vendedora"
}
const pessoa2 = {
    nome: "Renato",
    idade: 34,
    profissao: "editor"
}

const funcaoImprimePessoa2 = (pessoa, pessoa1) => {
    const array = []
    array.push(pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length)

    const array2 =[]
    array.push(pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length)
    
    console.log(array, array2)
}

funcaoImprimePessoa2(pessoa1, pessoa2)


/*3.3. Resolva os passos a seguir:    
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades:
    nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`.
    Invoque essa função passando os três objetos criados.
    d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 

Resposta:
*/

const carrinho = []

const sacolaoFruta1 = {
    nome: "Abacaxi",
    disponibilidade: 1
}
const sacolaoFruta2 = {
    nome: "Laranja",
    disponibilidade: 1
}
const sacolaoFruta3 = {
    nome: "Manga",
    disponibilidade: 1
}

const funcaoAddFruta = (fruta) =>{
    carrinho.push(fruta.nome, fruta.disponibilidade > 0)
}

funcaoAddFruta(sacolaoFruta1)
funcaoAddFruta(sacolaoFruta2)
funcaoAddFruta(sacolaoFruta3)

console.log(carrinho)


/* Desafios
1.Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades.
Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

Resposta:
*/

const pessoaUsuario = (nomeDigitado, idadeDigitada, profissaoDigitada) => {
    nomeDigitado = prompt("insira seu nome"),
    idadeDigitada = prompt("insira sua idade"),
    profissaoDigitada = prompt("insira sua profissão")

    const pessoaDigitada = {
    nome: nomeDigitado,
    idade: idadeDigitada,
    profissaoD: profissaoDigitada
  }
  return pessoaDigitada
}
console.log(pessoaUsuario())
console.log(typeof(pessoaUsuario()))

/*2.Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome.
A função deve retornar uma mensagem no seguinte modelo:
O primeiro filme foi lançado antes do segundo? false
O primeiro filme foi lançado no mesmo ano do segundo? true

Resposta:
*/
let nomeFilme1 = prompt("insira o nome do primeiro filme")
let anoFilme1 = prompt("insira o ano do primeiro filme")
let nomeFilme2 = prompt("insira o nome do segundo filme")
let anoFilme2 = prompt("insira o ano do segundo filme")

const comparaFilmes = (filme1, filme2) =>{
    objetoFilme1 ={
        nome: nomeFilme1,
        ano: anoFilme1
    }
    objetoFilme2 = {
        nome: nomeFilme2,
        ano: anoFilme2
    }
}
comparaFilmes()

console.log("O primeiro filme foi lançado antes do segundo?", + objetoFilme1.ano > objetoFilme2.ano)
console.log("O primeiro filme foi lançado no mesmo ano do segundo?", + objetoFilme1.ano == objetoFilme2.ano)


/*3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão:
ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade `disponibilidade` com o valor invertido.

Resposta:
*/

const sacolaoFruta4 = {
    ...sacolaoFruta1,
    disponibilidade: 0
}
const sacolaoFruta5 = {
    ...sacolaoFruta2,
disponibilidade: 0
}
const sacolaoFruta6 = {
    ...sacolaoFruta3,
    disponibilidade: 0
}

funcaoAddFruta(sacolaoFruta4)
funcaoAddFruta(sacolaoFruta5)
funcaoAddFruta(sacolaoFruta6)

console.log(carrinho)