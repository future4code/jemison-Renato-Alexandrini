import { Purchase, PurchaseDB } from './../models/Purchase';
import { BaseDatabase } from "./baseDatabase"


export class PurchaseDatabase extends BaseDatabase {
    public static TABLE_PURCHASES = "Labe_Purchases"

    public async getAllPurchasesClass() {
        const result = await PurchaseDatabase.connection(PurchaseDatabase.TABLE_PURCHASES).select()

        return result
    }

    public async createPurchaseClass(userId: string, productId: string, quantity:number, totalPrice: number) {

        const purchase = new Purchase(
           Date.now().toString(),
           userId,
           productId,
           quantity,
           totalPrice
                    )
        
        await PurchaseDatabase.connection(PurchaseDatabase.TABLE_PURCHASES).insert({
            id: purchase.getId(),
            user_id: purchase.getUserId(),
            product_id: purchase.getProductId(),
            quantity: purchase.getQuantity(),
            total_price: purchase.getTotalPrice()
        })

        return purchase

    }

    } 