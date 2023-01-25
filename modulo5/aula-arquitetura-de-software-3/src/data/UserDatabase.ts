import { UserClass } from './../model/User';
import { TABLE_USERS } from './TableNames';
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  TABLE_NAME = TABLE_USERS

  async create(user:UserClass ): Promise<void> {
    try {
      await UserDatabase.connection
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword()         
        })
        .into(this.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  
  GetAllUsers = async (): Promise<UserClass[]> => {
    try {
      return await UserDatabase.connection(this.TABLE_NAME)

    } catch (error: any) {
      throw new Error(error.message)
    }

  }
}
