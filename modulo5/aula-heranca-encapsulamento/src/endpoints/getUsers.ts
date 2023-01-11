import { Request, Response } from "express"
import { UserDatabase } from "../Class/UserDatabase"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const addUser = new UserDatabase()
        const result = await addUser.getAllUsersClass()
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}