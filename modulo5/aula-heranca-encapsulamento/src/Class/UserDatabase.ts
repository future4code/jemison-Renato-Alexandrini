import { TABLE_USERS } from './../database/tableNames';
import { BaseDatabase } from "./baseDatabase"
import { User } from '../models/User'

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labe_Users"

    public async getAllUsersClass() {
        const result = await UserDatabase.connection(UserDatabase.TABLE_USERS).select()

        return result
    }


    public async createUserClass(email: string, password: string) {

        const user = new User(
            Date.now().toString(),
            email,
            password
        )

        await UserDatabase.connection(UserDatabase.TABLE_USERS).insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        })

        return user

    }

    public async getUserByIdClass(id: string) {

        const result = await UserDatabase.connection.raw(`
        SELECT * FROM ${TABLE_USERS}
        WHERE id = "${id}"
        `)
        return result
    }


} 
