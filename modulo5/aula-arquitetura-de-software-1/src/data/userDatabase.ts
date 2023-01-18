import { UserClass } from './../models/userClass';
import { BaseDatabase } from "./baseDataBase";
import { TABLE_USERS } from "./tableNames";

export class UserDatabase extends BaseDatabase {
    TABLE_NAME = TABLE_USERS

    insertUser = async (user: UserClass): Promise<void> => {
        try {
            await UserDatabase.connection.insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            }).into(this.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.message)
        }

    }

    GetAllUsers = async (): Promise<void> => {
        try {
          return await UserDatabase.connection(this.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.message)
        }

    }

    UserEmailExists = async (email: string):Promise<UserClass[]> => {
        try {
            const userEmailExist = await UserDatabase.connection(this.TABLE_NAME).where('email', email)
            return userEmailExist

        } catch (error: any) {
            throw new Error(error.message)
        }

    }

}