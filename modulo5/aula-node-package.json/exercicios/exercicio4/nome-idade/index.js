let nomeInput = process.argv[2]
let idadeInput = Number(process.argv[3])

const NomeIdade = ((nome, idade) => {
    console.log(`Olá ${nome}! Você tem ${idade} anos.`)
})
NomeIdade(nomeInput, idadeInput)

const NomeIdadeFutura = ((nome, idade) => {
    return console.log(`Olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)
})

NomeIdadeFutura(nomeInput, idadeInput)