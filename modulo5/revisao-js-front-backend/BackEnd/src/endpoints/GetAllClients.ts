import { ClientsDatabase } from './../database/clientsDatabase';
import { Request, Response } from "express";

export const GetAllClients = async (req: Request, res: Response): Promise<void> => {

    let errorCode = 400

    try {

        const clientsDatabase = new ClientsDatabase();
    
         const result = await clientsDatabase.GetAllClients()
                
        res.status(201).send(result)
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}