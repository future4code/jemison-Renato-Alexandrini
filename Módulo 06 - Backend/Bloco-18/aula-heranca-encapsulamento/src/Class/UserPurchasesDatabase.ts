import { BaseDatabase } from "./baseDatabase"


export class UserPurchasesDatabase extends BaseDatabase {

    public static TABLE_USERS = "Labe_Users";
    public static TABLE_PRODUCTS = "Labe_Products";
    public static TABLE_PURCHASES = "Labe_Purchases";

    public async getUsePurchasesClass(id: string) {
        const result = await UserPurchasesDatabase.connection.raw(`
        SELECT
            ${UserPurchasesDatabase.TABLE_USERS}.email,
            ${UserPurchasesDatabase.TABLE_PRODUCTS}.name AS product_name,
            ${UserPurchasesDatabase.TABLE_PRODUCTS}.price AS product_price,
            ${UserPurchasesDatabase.TABLE_PURCHASES}.quantity AS product_quantity,
            ${UserPurchasesDatabase.TABLE_PURCHASES}.total_price
        FROM ${UserPurchasesDatabase.TABLE_PURCHASES}
        JOIN ${UserPurchasesDatabase.TABLE_USERS}
        ON ${UserPurchasesDatabase.TABLE_PURCHASES}.user_id = ${UserPurchasesDatabase.TABLE_USERS}.id
        JOIN ${UserPurchasesDatabase.TABLE_PRODUCTS}
        ON ${UserPurchasesDatabase.TABLE_PURCHASES}.product_id = ${UserPurchasesDatabase.TABLE_PRODUCTS}.id
        WHERE ${UserPurchasesDatabase.TABLE_PURCHASES}.user_id = ${id};
        `)


        return result
    }

}