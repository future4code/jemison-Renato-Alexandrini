import { Request, Response } from "express"
import { UserPurchasesDatabase } from "../Class/UserPurchasesDatabase"


export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const userPurchases = new UserPurchasesDatabase()
const result = await userPurchases.getUsePurchasesClass(id) 
            res.status(200).send({ purchases: result[0] })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}