import { OrdersClass } from './../models/Orders';
import { BaseDatabase } from './baseDatabase'
import { TABLE_ORDERS } from './migrations/tableNames'

export class OrdersDatabase extends BaseDatabase {

    TABLE_NAME = TABLE_ORDERS
 
    public async CreateOrder(order: OrdersClass){
        await super.CreateItem(order)
    }
}