import { Request, Response } from "express"
import { ProductDatabase } from "../Class/ProductDatabase"


export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const addProduct = new ProductDatabase()
        const result = await addProduct.getAllProductsClass()
        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}