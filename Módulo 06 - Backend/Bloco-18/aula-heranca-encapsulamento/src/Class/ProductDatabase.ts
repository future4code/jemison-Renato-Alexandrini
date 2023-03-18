import { BaseDatabase } from "./baseDatabase"
import { Product } from '../models/Product'

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Labe_Products"

    public async getAllProductsClass() {
        const result = await ProductDatabase.connection(ProductDatabase.TABLE_PRODUCTS).select()

        return result
    }


    public async createProductClass(name: string, price: number) {

        const product = new Product(
            Date.now().toString(),
            name,
            price
        )

        await ProductDatabase.connection(ProductDatabase.TABLE_PRODUCTS).insert({
            id: product.getId(),
            email: product.getName(),
            password: product.getPrice()
        })

        return product

    }

    public async getProductByIdClass(id: string) {

        const result = await ProductDatabase.connection.raw(`
        SELECT * FROM ${ProductDatabase.TABLE_PRODUCTS}
        WHERE id = "${id}"
        `)
        return result
    }

} 
