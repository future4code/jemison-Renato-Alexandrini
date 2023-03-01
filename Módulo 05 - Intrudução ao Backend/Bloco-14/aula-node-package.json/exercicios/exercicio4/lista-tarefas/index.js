

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