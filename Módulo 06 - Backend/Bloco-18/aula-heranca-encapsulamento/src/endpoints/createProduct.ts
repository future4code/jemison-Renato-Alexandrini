import { Request, Response } from "express"
import { ProductDatabase } from "../Class/ProductDatabase"


export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = Number(req.body.price)

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        const addProduct = new ProductDatabase()

       const product = await addProduct.createProductClass(name, price )

        res.status(201).send({ message: "Produto criado", product: product })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}