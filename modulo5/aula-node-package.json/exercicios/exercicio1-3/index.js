
// Exercício 01

// a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// - Os pararâmetros são recebidos com o comando 'process.argv[]'com o indice a partir do 2, pois o index 0 e 1 já são ocupados por informações.
// Então, para passar o argumento basta após o comando para iniciar o script, adicionar os valores desejados separados por espaço.

//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

let nomeInput = process.argv[2]
let idadeInput = Number(process.argv[3])

const NomeIdade = ((nome, idade) => {
    console.log(`Olá ${nome}! Você tem ${idade} anos.`)
})

NomeIdade(nomeInput, idadeInput)



//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

const NomeIdadeFutura = ((nome, idade) => {
    return console.log(`Olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)
})

NomeIdadeFutura(nomeInput, idadeInput)


//Exercício 2

// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos.
// O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

let operacaoInput = process.argv[2]
let num1Input = Number(process.argv[3])
let num2Input = Number(process.argv[4])
let resultado = 0

const OperacoesMatematicas = ((operacao, num1, num2) => {

    if (/[0-9]/.test(num1) == false || /[0-9]/.test(num2) == false) {
        return (console.log("Após escolher a operação, você deve digitar dois numeros"))
    }
    else if (operacao == 'add') {
        return console.log(`O resultado da some é: ${resultado = num1 + num2}`)
    }
    else if (operacao === 'sub') {
        return console.log(`O resultado da subtração é: ${resultado = num1 - num2}`)
    }
    else if (operacao === 'mult') {
        return console.log(`O resultado da multiplição é: ${resultado = num1 * num2}`)
    }
    else if (operacao === 'div') {
        return console.log(`O resultado da divisão é: ${resultado = num1 / num2}`)
    }
    else { console.log('Escolha uma das operações matemáticas: add, sub, mult ou div') }

})

OperacoesMatematicas(operacaoInput, num1Input, num2Input)


// Exercício 3

// Crie uma aplicação Node que receba uma string representando uma tarefa. 
// O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas.
// A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

const listaDeTarefas = [
    'Lavar a louça',
    'varrer a casa',
    'lavar a roupa',
    'preparar o jantar'
]
let novaListaDeTarefas = [...listaDeTarefas]

let tarefaInput = process.argv[2]

const AdicionarTarefa =((tarefa)=>{
    if(tarefa == undefined){
        console.log("Insira uma tarefa!")
    }
    else{
    novaListaDeTarefas.push(tarefa)
    console.log('tarefa adicionada com sucesso')
console.table(novaListaDeTarefas)
    }
})

AdicionarTarefa(tarefaInput)