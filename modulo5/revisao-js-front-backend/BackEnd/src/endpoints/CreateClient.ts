import { ClientClass } from './../models/Client';
import { ClientsDatabase } from './../database/clientsDatabase';
import { Request, Response } from "express";

export const CreateClient = async (req: Request, res: Response): Promise<void> => {

    let errorCode = 400

    try {

        const name = req.body.name

        if (!name) {
            errorCode = 422
            throw new Error("Nome do novo estudante faltando.")
        }
      
        const clientsDatabase = new ClientsDatabase();
        const nameExists = await clientsDatabase.ClientEmailExists(name)

        if (nameExists) {
            errorCode = 422
            throw new Error("Este nome já foi cadastrado anteriormente.")
        }
        
        const newClient = new ClientClass(
            0,
            name,
            )
           await clientsDatabase.CreateClient(newClient)
                
        res.status(201).send("Novo Cliente adicionado.")
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}