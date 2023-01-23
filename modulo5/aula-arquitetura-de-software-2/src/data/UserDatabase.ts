import { TABLE_USERS } from './TableNames';
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  TABLE_NAME = TABLE_USERS

  async create({ id, name, email, password }: any): Promise<void> {
    try {
      await UserDatabase.connection
        .insert({
          id,
          name,
          email,
          password,
        })
        .into(this.TABLE_NAME);
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
}
