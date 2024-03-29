import { CustomError } from "../error/customError";
import { EditUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name, nickname: user.nickname })
        .where({ id: user.id })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserByEmail = async (email: string):Promise<user[]> => {
    try {
      return await UserDatabase.connection('Auth_users').where('email', email)
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }


public getUserById = async (id: string):Promise<user[]> => {
  try {
    return await UserDatabase.connection('Auth_users').where('id', id)
  } catch (error: any) {
    throw new CustomError(400, error.message);
  }
}

}


