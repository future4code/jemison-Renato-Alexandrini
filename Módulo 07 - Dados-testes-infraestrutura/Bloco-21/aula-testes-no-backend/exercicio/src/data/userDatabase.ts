import { CustomError } from "../error/customError";
import { BaseDatabase } from "./baseDatabase";
import { User } from "../model/class";

export class UserDatabase extends BaseDatabase{

    TABLE_NAME = 'User_Arq'  

    public getUserById = async (id:string): Promise<User> => {
        try {

           const result = await UserDatabase.connection(this.TABLE_NAME).where('id', id)
           return result[0]

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    public getAllUsers = async (): Promise<User[]> => {
        try {

           const result = await UserDatabase.connection(this.TABLE_NAME)
           return result[0]

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }
};