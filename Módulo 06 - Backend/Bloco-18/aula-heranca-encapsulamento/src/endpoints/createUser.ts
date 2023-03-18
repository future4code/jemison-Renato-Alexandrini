import { Request, Response } from "express"
import { UserDatabase } from "../Class/UserDatabase"



export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }
     
  const addUser =  new  UserDatabase()
        
  const user = await addUser.createUserClass(email, password)

        res.status(201).send({ message: "Usuário criado", user: user }) 
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}