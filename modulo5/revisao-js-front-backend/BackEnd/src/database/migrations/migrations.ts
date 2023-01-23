import { BaseDatabase } from "../baseDatabase"
import { TABLE_PRODUCTS, TABLE_CLIENTS, TABLE_ORDERS } from './tableNames';
import clients from './clients.json';
import products from './products.json';
import orders from './orders.json';

export abstract class MigrationDataBase extends BaseDatabase {

    public static startMigration() {

        const createTables = async () => {
            await MigrationDataBase.connection.raw(`
                SET FOREIGN_KEY_CHECKS= 0;

                DROP TABLE IF EXISTS ${TABLE_PRODUCTS}, ${TABLE_CLIENTS}, ${TABLE_ORDERS}; 

                SET FOREIGN_KEY_CHECKS= 1;

                CREATE TABLE IF NOT EXISTS ${TABLE_PRODUCTS}(
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                name VARCHAR(255) NOT NULL,
                price FLOAT,
                qty_stock INT
                );

                CREATE TABLE IF NOT EXISTS ${TABLE_CLIENTS}(
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                name VARCHAR(255) NOT NULL
                );

                CREATE TABLE IF NOT EXISTS ${TABLE_ORDERS}(
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                order_date DATE NOT NULL
                delivery_date DATE NOT NULL,
                qty INT NOT NULL,
                fk_client INT NOT NULL,
                fk_product INT NOT NULL,
                FOREIGN KEY (fk_client) REFERENCES ${TABLE_CLIENTS}(id),
                FOREIGN KEY (fk_product) REFERENCES ${TABLE_PRODUCTS}(id)
                );

                `)
                .then(() => {
                    console.log(`Tables created successfully!`)
                    insertData()
                })
                .catch((error: any) => printError(error))
        }

        const insertData = async () => {
            try {
                await MigrationDataBase.connection(`${TABLE_CLIENTS}`)
                    .insert(clients)
                    .then(() => console.log(`${TABLE_CLIENTS} populated!`))
                    .catch((error: any) => printError(error))

                await MigrationDataBase.connection(`${TABLE_PRODUCTS}`)
                    .insert(products)
                    .then(() => console.log(`${TABLE_PRODUCTS} populated!`))
                    .catch((error: any) => printError(error))

                await MigrationDataBase.connection(`${TABLE_ORDERS}`)
                    .insert(orders)
                    .then(() => console.log(`${TABLE_ORDERS} populated!`))
                    .catch((error: any) => printError(error))

            } catch (error: any) {
                console.log(error.sqlMessage || error.message)
            } finally {
                console.log("Ending connection!")

                return MigrationDataBase.connection.destroy()
            }
        }

        const printError = (error: any) => {
            console.log(error.sqlMessage || error.message)
        }

        createTables()

    }
}

MigrationDataBase.startMigration()
