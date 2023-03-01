
// Observe a função a seguir, escrita em JavaScript:

// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

// r)A função deve receber um array de números e retorna um objeto contendo o maior número, o menor e a média de todo o array
type Estatistica ={
    maior:number,
    menor:number,
    media: number
}

const obterEstatisticas =((numeros:number[]):Estatistica => {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
})

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 

// r)A variável 'numerosOrdenados' é um array de números que ordena os números do array recebido do menor para o maior, a variável 'soma' é um
// número que é contruido pela soma de todos os números dentro do array recebido e a variável 'estatiticas' que é o objeto de retorno da função, contendo o maior número, o menor número e a variável soma dividida pelo
// número de ocorrências dentro do array recebido.

// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// r)
type Estatistica2 ={
    maior:number,
    menor:number,
    media: number
}
type NumberArray = [50, 35, 20, 5, 80, 11]

type amostraDeDados = NumberArray & Estatistica2