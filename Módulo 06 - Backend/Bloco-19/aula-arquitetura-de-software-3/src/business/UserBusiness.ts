import { InvalidData } from './../error/UserError';
import { UserInputDTO } from './../model/UserDTO';
import { UserClass } from './../model/User';
import { UserDatabase } from "../data/UserDatabase"
import { generateId } from "../services/idGenerator"
import { CustomError } from './../error/CustomError';

export class UserBusiness {
 
  async create({ email, name, password }: UserInputDTO): Promise<void> {
    if (!email || !name || !password) {
      throw new InvalidData()
    }

    const id = generateId()

    const user = new UserClass(
      id,
      name,
      email,
      password
    )

    const userDatabase = new UserDatabase()
    await userDatabase.create(user)
  }

  getAllUsers = async (): Promise<UserClass[]> => {

    try {
      const userDatabase = new UserDatabase()
      return await userDatabase.GetAllUsers()

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }

}
