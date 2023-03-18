
// Você acabou de conseguir um emprego em uma importadora e precisa continuar a desenvolver o sistema de organização de estoque da empresa.
// A pessoa desenvolvedora anterior a você chegou a criar uma função que ajusta os preços para o formato brasileiro, mas não chegou a implementa-la:

// const ajustaPreco = (preco :number): string => {
// 	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
// 	return "R$ "+valorAjustado
// }

// O seguinte array traz o estoque atual da empresa:

// [
// 	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
// 	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
// 	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
// 	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
// 	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
// 	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
// 	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
// ]

// Aproveitando a função já feita, faça uma nova função que receba o arrayde estoque como parâmetro, use a função ajustaPreco
// para corrigir os preços e retorne a lista de estoque ordenada pela quantidade de cada produto. 

type Produtos = {
    nome: string
    quantidade: number,
    valorUnitario: number
}
type ProdutosSaida = {
    nome: string
    quantidade: number,
    valorUnitario: string

}

let produtos: Produtos[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
]

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const compararQuantidade = ((obj1:Produtos, obj2:Produtos):number =>{
    if(obj1.quantidade < obj2.quantidade)
    return -1;
    if(obj1.quantidade > obj2.quantidade)
    return 1;
    return 0;
})


const EstoqueOrdenado = ((array: Produtos[]): ProdutosSaida[] => {
produtos.sort(compararQuantidade)
const produtosAjustados:ProdutosSaida[] = produtos.map((produto)=>{
return {nome: produto.nome, quantidade:produto.quantidade, valorUnitario:(ajustaPreco(produto.valorUnitario))}
})
return produtosAjustados
})

console.table(EstoqueOrdenado(produtos))