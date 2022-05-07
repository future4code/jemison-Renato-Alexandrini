/*- **Exercícios de interpretação de código**
    
Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil,
pode rodar no seu computador **para analisar e pensar sobre o resultado.**

1.Leia o código abaixo
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

a) O que vai ser impresso no console?

Resposta:

a)o código não vai imprimir nada, pois está faltando o retorno de algum dado



2.Leia o código abaixo
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

a) O que vai ser impresso no console?

Resposta:

a) O código deve retornar um array apenas com os nomes do array original


3.Leia o código abaixo
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

a) O que vai ser impresso no console?

Resposta:

a) O código deve criar um novo array contendo todos os item com os apelidos que não sejam Chijo

*/

/* Exercícios de escrita de código

1.Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações
pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

a) Crie um novo array que contenha apenas o nome dos doguinhos
b) Crie um novo array apenas com os [cachorros salsicha]
c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
 A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

 Resposta:

 */

 const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
]
 //a)
 const arrayApenasNomes = pets.map((item)=>{
   return item.nome
 })
 console.log(arrayApenasNomes)

 //b)
 const arrayApenasSalsichas = pets.filter((item)=>{
   return item.raca == "Salsicha"
 })
console.log(arrayApenasSalsichas)

//c)
const arrayFiltroMensagemPet = pets.filter((item)=>{
  return item.raca == "Poodle"
})
const arrayMensagemPet = arrayFiltroMensagemPet.map((item)=>{
  return item.nome
})
for(nome of arrayMensagemPet){
console.log(`Parabéns, você ganhou um cupom de desconto para o banho e tosa para o/a ${nome}`)
}



/*2.Dado o seguinte array de produtos, realize as operações
pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

a) Crie um novo array que contenha apenas o nome de cada item
b) Crie um novo array que contenha um objeto com o nome e
   o preço de cada item, aplicando 5% de desconto em todos eles
c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
 Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

Resposta:
 */

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)
const arrayApenasNomeProdutos = produtos.map((item)=>{
  return item.nome
})
console.log(arrayApenasNomeProdutos)

//b)
const arrayPrecoComDesconto = produtos.map((item)=>{
  let nomeProduto = item.nome  
  let valorComDesconto = item.preco - (item.preco*0.05)
  return {nomeProduto, valorComDesconto }
})
console.log(arrayPrecoComDesconto)

//c)
const arrayApenasBebidas = produtos.filter((item)=>{
return item.categoria == "Bebidas"
})
console.log(arrayApenasBebidas)

//d)
const arrayApenasYpe = produtos.filter((item)=>{
  return item.nome.includes("Ypê")
})
console.log(arrayApenasYpe)

//e)
const arrayApenasYpeNovo = produtos.filter((item)=>{
  return item.nome.includes("Ypê")
})
for(let produtosYpe of arrayApenasYpeNovo){
  console.log(`Compre ${produtosYpe.nome} por apenas ${produtosYpe.preco}`)
}


/* Desafios

1.Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]

a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**

Resposta:
*/


const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]

const novoArrayOrdemAlfabetica = pokemons.map((item)=>{

  return item.nome
})
console.log(novoArrayOrdemAlfabetica.sort())

const novoArraySemRepeticao = pokemons.map((item)=>{
  nomePokemon = item.nome
  tipoPokemon = item.tipo
  return {nomePokemon, tipoPokemon}
})

let array = novoArraySemRepeticao
 for(let poke of array){
   if (poke.tipoPokemon == poke.tipoPokemon)
   array.pop()
 }
 console.log(array)