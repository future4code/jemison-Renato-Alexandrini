import { BaseDatabase } from './baseDatabase'
import { TABLE_ORDERS } from './migrations/tableNames'

export class ProductsDatabase extends BaseDatabase {

    TABLE_NAME = TABLE_ORDERS

    public async GetAllProducts(){
        await super.GetAll()
     }

     public async ProductExists(productId:number) {

        const productExists = await ProductsDatabase.connection(this.TABLE_NAME).where('id', productId)
        return productExists.length > 0
}
}