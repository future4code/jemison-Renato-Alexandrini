import express, { Request, Response } from 'express'
import { users } from './data'
import cors from 'cors'
import { User, USER_TYPE } from './types'


const app = express()
app.use(express.json())
app.use(cors())

//Exercício 01
// Vamos começar fazendo um endpoint que busque todos os usuários de uma lista.

//a) Qual método HTTP você deve utilizar para isso?
//r)O método get

//b)Como você indicaria a entidade que está sendo manipulada?
//r)eu usaria a entidade /users

app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users)
})

//Exercício 02
// Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade type específica,
// recebendo apenas um type por vez. Após isso, responda:

//a)Como você passou os parâmetros de type para a requisição? Por quê?
//r)Através do QueryParams, pois seria uma busca no array pelo valor desejado

//b)Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
//r)Utilizando o Enum 

app.get('/users/filter/type', (req: Request, res: Response) => {

    let errorCode = 500
    try {

        let typeFilter = req.query.filterType as string

        if (!typeFilter) {
            errorCode = 422
            throw new Error('Falta o tipo para realizar a busca')
        }
        if (typeFilter.toUpperCase() !== USER_TYPE.ADMIN && typeFilter.toUpperCase() !== USER_TYPE.NORMAL) {
            errorCode = 422
            throw new Error('Tipo para busca inválido')
        }

        const newUsers = users.filter((user) => {
            return user.type === typeFilter.toUpperCase()
        })
        res.status(200).send(newUsers)

    } catch (error: any) {

        res.status(errorCode).send(error.message)
    }
})


// //Exercício 03
// Vamos agora praticar o uso de buscas mais variáveis. Faça agora um endpoint de busca que encontre um usuário buscando por nome.

//a) Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//r)QueryParams novamente por se tratar novamente de uma busca 

//b) Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
//r)

app.get('/users/filter/name', (req: Request, res: Response) => {
    let errorCode = 500
   
    try {

        let nameFilter = req.query.filterName as string

        if (!nameFilter) {
            errorCode = 422
            throw new Error('Falta o nome para realizar a busca')
        }
        const nameExists = users.find((user)=>{
            return user.name.toLowerCase() === nameFilter.toLowerCase() 
        })
        if(!nameExists){
            errorCode = 404
            throw new Error('Nome de usuário nao encontrado')
        }else{
            res.status(200).send(nameExists)
        }

    } catch (error: any) {

        res.status(errorCode).send(error.message)
    }
})



app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003')
})