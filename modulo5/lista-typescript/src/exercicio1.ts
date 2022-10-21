import { Input } from './constants'

// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”).
// A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 
// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 



const nomeArgv = process.argv[2]
const dataArgv = process.argv[3]

const nomeReadline = Input.question('Escreva seu nome')
const dataReadline = Input.question('Escreva sua data de nascimento dd/mm/aaaa')

const meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
]

console.log(meses[0])
const NomeData = ((nome: string, data: string): string => {
    const dataSeparada: string[] = data.split('/', 3)

    const dia = dataSeparada[0]
    const mes = meses[Number(dataSeparada[1]) - 1]
    const ano = dataSeparada[2]
    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`

})


console.log(NomeData(nomeArgv, dataArgv))

console.log(NomeData(nomeReadline, dataReadline))

console.log(NomeData('Renato', '19/06/1987'))




