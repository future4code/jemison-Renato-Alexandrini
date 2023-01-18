import { OrdersDatabase } from './../database/ordersDatabase';
import { OrdersClass } from './../models/Orders';
import { ProductsDatabase } from './../database/productsDatabase';
import { ClientsDatabase } from './../database/clientsDatabase';
import { Request, Response } from "express";
import { ValidateDate } from '../functions/validateDate';
import { ConvertDate } from '../functions/convertDate';


export const CreateOrders = async (req: Request, res: Response): Promise<void> => {

    let errorCode = 400

    try {
      
        const delivery_date = req.body.deliveryDate
        const qty = req.body.qty
        const fk_client = req.body.fkClient
        const fk_product = req.body.fkProduct

        let convertedDate

        if (!delivery_date) {
            errorCode = 422
            throw new Error("Data de entrega faltando.")
        }
        if (!qty) {
            errorCode = 422
            throw new Error("Quantidade de produtos faltando.")
        }
        if (!fk_client) {
            errorCode = 422
            throw new Error("Id do cliente faltando.")
        }
        if (!fk_product) {
            errorCode = 422
            throw new Error("Id do produto faltando.")
        }

        const isValidateDeliveryDate = ValidateDate(delivery_date)

        if (!isValidateDeliveryDate) {
            errorCode = 422
            throw new Error("Data de nascimento inválida, a data precisa ter o formato dd/mm/aaaa.")
        } else {
            convertedDate = ConvertDate(delivery_date)
        }


       const clientsDatabase = new ClientsDatabase()
       const productsDatabase = new ProductsDatabase()

       const clientExists = await clientsDatabase.ClientIdExists(fk_client)
       
       if(!clientExists){
        errorCode = 422
        throw new Error("Cliente Inesistente no banco de dados.")
       }

       const productExists = await productsDatabase.ProductExists(fk_product)

       if(!productExists){
        errorCode = 422
        throw new Error("produto Inesistente no banco de dados.")
       }
       
            const newOrder = new OrdersClass(
            0,
            new Date().toISOString().slice(0,10),
            convertedDate,
            qty,
            fk_client,
            fk_product
            
        )

     const ordersDatabase = new OrdersDatabase()

      await ordersDatabase.CreateOrder(newOrder)
             
                  
           res.status(201).send("Novo Pedido adicionado.")

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}