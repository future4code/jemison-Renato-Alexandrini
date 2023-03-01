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
        const nameExists = users.find((user) => {
            return user.name.toLowerCase() === nameFilter.toLowerCase()
        })
        if (!nameExists) {
            errorCode = 422
            throw new Error('Nome de usuário nao encontrado')
        } else {
            res.status(200).send(nameExists)
        }

    } catch (error: any) {

        res.status(errorCode).send(error.message)
    }
})

//Exercício 04
// Fizemos algumas buscas no nosso conjunto de itens, agora é hora de **adicionar** coisas. Comecemos criando um usuário na nossa lista.
// Crie um endpoint que use o método `POST` para adicionar um item ao nosso conjunto de usuários.

//a) Mude o método do endpoint para `PUT`. O que mudou?
//Na prática não altera no funcionamento do endpoint, porém o PUT é utilizado na atualização de um dado existente

//b) Você considera o método `PUT` apropriado para esta transação? Por quê?
//Para um melhor entendimento do código é melhor manter o método POST pois se trata da criação de um novo dado

app.post('/users/add', (req: Request, res: Response) => {

    let errorCode = 500

    try {

        const { name, email, type, age }: User = req.body

        if (!name) {
            errorCode = 422
            throw new Error('Nome do novo usuário faltando')
        }
        if (typeof (name) != 'string') {
            errorCode = 422
            throw new Error('Nome inválido')
        }

        if (!email) {
            errorCode = 422
            throw new Error('Email do novo usuário faltando')
        }
        if (typeof (email) != 'string') {
            errorCode = 422
            throw new Error('email inválido')
        }

        if (!type) {
            errorCode = 422
            throw new Error('Tipo de conta do novo usuário faltando')
        }

        if (type.toUpperCase() !== USER_TYPE.ADMIN && type.toUpperCase() !== USER_TYPE.NORMAL) {
            errorCode = 422
            throw new Error('O tipo de conta do usuário precisa ser "ADMIN" ou "NORMAL"')
        }

        if (!age) {
            errorCode = 422
            throw new Error('Idade do novo usuário faltando')
        }

        if (typeof (age) != 'number' && age <= 0) {
            errorCode = 422
            throw new Error('idade precisa ser um valor acima de 0')
        }

        const emailExists = users.find((user) => {
            return user.email.toLowerCase() === email.toLowerCase()
        })

        if (emailExists) {
            errorCode = 409
            throw new Error('Já existe um usuário cadastrado com este email')

        } else {
            users.push({
                id: users.length + 1,
                name: name,
                email: email,
                type: type,
                age: age
            })
            res.status(200).send(users)
        }
    } catch (error: any) {

        res.status(errorCode).send(error.message)
    }
})

//Exercício 05
// Vamos alterar nosso último usuário. Crie um endpoint com o método PUT para alterar o nome do nosso usuário recém criado.
// Adicione em seu nome o sufixo -ALTERADO. Para este caso, encerre a request sem enviar uma resposta no body.

//Exercício 06
// Essa não! Alteramos um dado por engano. Vamos realterar nosso último usuário.
// Crie um endpoint com o método PATCH para alterar mais uma vez o nome do nosso usuário recém alterado.
// Adicione em seu nome o sufixo -REALTERADO.

app.put('/user/:userId/update', (req: Request, res: Response) => {

    let errorCode = 500

    try {
        const chosenUser = req.params.userId
        const newName = req.query.nameNew as string

        if (!chosenUser) {
            errorCode = 422
            throw new Error('Faltando, ID do usuário que será alterado')
        } else {
            const userExists = users.find((user) => {
                return Number(user.id) === Number(chosenUser)
            })
            if (!userExists) {
                errorCode = 422
                throw new Error('ID do usuário não encontrado')

            } else {

                if (!newName) {
                    errorCode = 422
                    throw new Error('Faltando o novo nome do usuário')
                } else {
                    users.map((user) => {
                        if (user.id === Number(chosenUser)) {

                            if (user.name.split(" ")[0].toLowerCase() === newName.toLowerCase()) {
                                errorCode = 409
                                throw new Error('Nome igual ao nome anterior')
                            }

                            if (user.name.includes('ALTERADO')) {
                                user.name = (newName + ' - REALTERADO')
                                res.status(200).send(users)
                            } else {
                                user.name = (newName + ' - ALTERADO')
                                res.status(200).send(users)
                            }
                        }
                    })
                }
            }
        }

    } catch (error: any) {

        res.status(errorCode).send(error.message)
    }
})

//Exercício 07
// Por fim, vamos remover este usuário de nossa lista. Crie um endpoint que receba um id em seu path 
// e utilize-o para removê-lo da lista de usuários.

app.delete('/user/:userId/delete', (req: Request, res: Response) => {

    let errorCode = 500

    try {

        const chosenUser = req.params.userId

        if (!chosenUser) {
            errorCode = 422
            throw new Error('Faltando, ID do usuário que será alterado')

        } else {

            const userExists = users.find((user) => {
                return Number(user.id) === Number(chosenUser)
            })

            if (!userExists) {
                errorCode = 422
                throw new Error('ID do usuário não encontrado')

            } else {

                users.map((user, index) => {

                    if (user.id === Number(chosenUser)) {
                        return users.splice(index, 1)
                    }
                })
                res.status(200).send(users)
            }
        }
    } catch (error: any) {

        res.status(errorCode).send(error.message)
    }
})



app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003')
})

//APIs REST DOcumentation
//https://documenter.getpostman.com/view/22377514/2s8YYFsj12