import { nomePessoas } from "./data.js"


const nome = process.argv[2]
let novoArray = []
const buscaPessoas = ((nome) => {
    nomePessoas.forEach((item) => {
        if (item.nome.includes(nome)) {
            novoArray.push(item)
        }
        return novoArray
    })
    console.table(novoArray)
})

buscaPessoas(nome)