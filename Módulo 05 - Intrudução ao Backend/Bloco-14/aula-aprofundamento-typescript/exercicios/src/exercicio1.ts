

// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// r)A variável fica com um erro de que não é possível atribuir o tipo 'number' a uma variável 'string'


// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings?
// Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

// r)Nesse caso podemos transformar essa variável em uma Union Type que aceite number e string: (variavel: number | string) 


// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

// r)
type Pessoa = {
    nome:string,
    idade:number,
    corFavorita:string
}

const renato:Pessoa = {
    nome:'Renato',
    idade:35,
    corFavorita:'preto'
}


// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.

// r)
enum CoresArcoIris{
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'
}

type PessoaD = {
    nome:string,
    idade:number,
    corFavorita:CoresArcoIris
}
const renato2:PessoaD = {
    nome:'Renato',
    idade:35,
    corFavorita:CoresArcoIris.ANIL
}
