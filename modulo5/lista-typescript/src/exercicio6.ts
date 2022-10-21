// Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital.
// Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, 
// eles salvam o nome do clientes, o saldo total e uma lista contendo todas os débitos realizados pelo cliente. Exemplo:



// [
// 	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]

// Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando de empréstimos.
// Dessa forma, a sua tarefa é criar uma função que receba este array como parâmetro, 
// atualize o saldo total descontando todos os débitos e retorne apenas os clientes com saldo negativo.

type Clientes = {
    cliente: string
    saldoTotal: number
    debitos: number[]
}
let clientesBanco: Clientes[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const Devedores = ((array: Clientes[]): any => {
    let newClientes: Clientes[] = array.map((devedor) => {
        let valorDebito: number = devedor.debitos.reduce((num1: number, num2: number): number => num1 + num2, 0)
        return { cliente: devedor.cliente, saldoTotal: (devedor.saldoTotal - valorDebito), debitos: [] }
    }).filter((clienteDevedor) => {
        return clienteDevedor.saldoTotal < 0
    })
    return newClientes
})

console.table(Devedores(clientesBanco))
