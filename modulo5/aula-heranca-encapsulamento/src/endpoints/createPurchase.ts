import { Request, Response } from "express"
import { Product } from "../models/Product"
import { Purchase } from "../models/Purchase"
import { UserDatabase } from "../Class/UserDatabase"
import { ProductDatabase } from "../Class/ProductDatabase"
import { PurchaseDatabase } from "../Class/PurchaseDatabase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = Number(req.body.quantity)

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const userCheck = new UserDatabase()
        const findUser = await userCheck.getUserByIdClass(userId)

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const productCheck = new ProductDatabase()
        const findProduct = await productCheck.getProductByIdClass(productId)
        
        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }
        
        const product = new Product(
            findProduct[0].id,
            findProduct[0].name,
            findProduct[0].price
        )
        
            const totalPrice =  product.getPrice() * quantity
    
        const addPurchase = new PurchaseDatabase()
        await addPurchase.createPurchaseClass(userId, productId, quantity, totalPrice)
    
        res.status(201).send({ message: "Compra registrada", purchase: addPurchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}