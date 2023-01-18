import { TABLE_USERS } from './../tableNames';
import { BaseDatabase } from "../baseDatabase";
import users from './users.json';


export abstract class MigrationDataBase extends BaseDatabase {

    public static startMigration() {

        const createTables = async () => {
            await MigrationDataBase.connection.raw(`
                SET FOREIGN_KEY_CHECKS= 0;

                DROP TABLE IF EXISTS ${TABLE_USERS};

                SET FOREIGN_KEY_CHECKS= 1;

                CREATE TABLE IF NOT EXISTS ${TABLE_USERS}(
                    id VARCHAR(255) PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL UNIQUE,
                    password VARCHAR(255) NOT NULL
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
                await MigrationDataBase.connection(`${TABLE_USERS}`)
                    .insert(users)
                    .then(() => console.log(`${TABLE_USERS} populated!`))
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