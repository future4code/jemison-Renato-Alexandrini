import express, { Request, Response } from "express"
import { toDoTasks } from "./data"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

//Exercicio 01
app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send('pong!')

})

//Exercicio 02
export type Task = {
    userId: number
    id: number
    title: string
    completed: boolean
}

//Exercicio 03
//Criado no arquivo data.ts

//Exercicio 04

app.get('/toDoList', (req: Request, res: Response) => {

    const taskStatus = req.query.statusTask

    if (!taskStatus) {
        res.status(400).send('Insira se você busca as tarefas incompletas ou as concluídas')
    } else {
        const filteredTasks = toDoTasks.filter((task) => {
            return task.completed.toString() === taskStatus
        })
        res.status(200).send(filteredTasks)
    }
})


//Exercício 05
app.post('/posts/addTask', (req: Request, res: Response) => {

    const { userId, title }: Task = req.body

    if (!userId || !title) {
        res.status(400).send('Você precisa inserir o seu código de usuário e descrever a tarefa')
    } else {

        toDoTasks.push({
            userId: userId,
            id: toDoTasks.length + 1,
            title: title,
            completed: false
        })
    }
    res.status(200).send(toDoTasks)
})

//Exercício 06
app.put('/tasks/:taskId/status', (req: Request, res: Response) => {

    const postChosen = req.params.taskId

    if (!postChosen) {
        res.status(400).send('Escolha a tarefa que deseja alterar o status')
    } else {
        toDoTasks.map((task) => {
            if (task.id === Number(postChosen)) {

                return task.completed = !task.completed
            }
        })
    }
    console.log('Status Alterado')
    res.status(200).send(toDoTasks)
})

//Exercício 07

app.delete('/tasks/:taskId/delete', (req: Request, res: Response) => {

    const postToDelete = req.params.taskId
    if (!postToDelete) {
        res.status(400).send('Escolha a tarefa que deseja deletar')
    } else {
        toDoTasks.map((task, index) => {
            if (task.id === Number(postToDelete)) {
                return toDoTasks.splice(index, 1)
            }
        })
    }
    res.status(400).send(toDoTasks)
})

//Exercícico 08

app.get('/userTasks',(req:Request, res:Response)=>{
const userId = req.headers.auth
let userToDoTasks 
if(!userId){
    res.status(400).send('Faltando Usuário')
}else{
userToDoTasks = toDoTasks.filter((task)=>{
return task.userId === Number(userId)
    })
}
res.status(400).send(userToDoTasks)
})

//Exercício 09

//Documentação do Post

//https://documenter.getpostman.com/view/22377514/2s8YK7qReJ


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});