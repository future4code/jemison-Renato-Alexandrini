import { ProductsDatabase } from './../database/productsDatabase';
import { Request, Response } from "express";

export const GetAllClients = async (req: Request, res: Response): Promise<void> => {

    let errorCode = 400

    try {

        const productsDatabase = new ProductsDatabase();
    
         const result = await productsDatabase.GetAllProducts()
                
        res.status(201).send(result)
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}