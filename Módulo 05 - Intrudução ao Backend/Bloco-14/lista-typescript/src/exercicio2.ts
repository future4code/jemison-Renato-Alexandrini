
// Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 


const VarType = ((variavel: any): void => {
    console.log(typeof (variavel))
})

VarType(false)

VarType('palavra')

VarType(100)

VarType({ nome: 'nome', idade: '20' })

VarType(['a', 'b', 'c', 'd'])