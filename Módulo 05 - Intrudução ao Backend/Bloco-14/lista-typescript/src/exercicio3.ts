import { Input } from './constants'
// Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes.
// Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme. 
// Os gêneros da plataforma se limitam aqueles encontrados no seguinte ENUM de gêneros: 
// enum GENERO {
// 	ACAO="ação",
// 	DRAMA="drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }
// Além dessas informações presentes em todos os filmes, alguns deles possuem uma informação opcional: 4.
// pontuação em site de resenha (ex. Metacritic, RotenTomatoes).
// Considerando todas estas informações, crie uma função que receba todas essas informações 
// como parâmetros( 3 essenciais + 1 opcional) e retorne todas informações organizadas em um `type`.

const nomeArgv = process.argv[2]
const anoArgv = Number(process.argv[3])
const generoArgv = Number(process.argv[4])
const notaArgv = Number(process.argv[5])

const nomeReadline = Input.question('Escreva o nome do filme: ')
const anoReadline = Number(Input.question('Escreva a data de lancamento do filme: '))
const generoReadline = Number(Input.question('Escolha o genero do filme: 1-Acao, 2-Drama, 3-Comedia, 4-Romance, ou 5-Terror: '))
const notaReadline = Number(Input.question('Escreva a media das notas deste filme: '))

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type FilmeClassificado = {
    nome: string
    ano: number
    genero: GENERO
    pontuacao: number
}
let generoEscolhido:GENERO
let generoEscolhidoNumero = generoArgv && generoReadline;
switch (generoEscolhidoNumero) {
    case 1: generoEscolhido = GENERO.ACAO;
        break;
    case 2: generoEscolhido = GENERO.DRAMA;
        break;
    case 3: generoEscolhido = GENERO.COMEDIA;
        break;
    case 4: generoEscolhido = GENERO.ROMANCE;
        break;
    case 5: generoEscolhido = GENERO.TERROR;
        break;
}

const OrganizaFilmes = ((nomeFilme: string, anoFilme: number, generoFilme: GENERO, nota?: number): FilmeClassificado => {

    let filme: FilmeClassificado = {
        nome: nomeFilme,
        ano: anoFilme,
        genero: generoFilme,
        pontuacao: nota
    }
    return filme
})

console.table(OrganizaFilmes(nomeArgv, anoArgv, generoEscolhido, notaArgv))

console.table(OrganizaFilmes(nomeReadline, anoReadline,generoEscolhido, notaReadline))

console.table(OrganizaFilmes('Mad Max 2', 1982, GENERO.ACAO, 10 ))

console.table(OrganizaFilmes('Rocky Balboa', 2006, GENERO.DRAMA))