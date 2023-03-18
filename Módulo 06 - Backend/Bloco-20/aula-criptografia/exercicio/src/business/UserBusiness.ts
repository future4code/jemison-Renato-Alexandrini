import { HashManager } from './../services/hashManager';
import { Authenticator } from './../services/authenticator';
import { LoginDataDTO } from './../model/user';
import { InvalidPassword, InvalidUser, InvalidUserPassword } from './../error/customError';
import { ValidatePassword } from './../services/validatePassword';
import { ValidateEmail } from './../services/validateEmail';
import { IdGenerator } from './../services/idGenerator';
import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
} from "../model/user";


const idGenerator = new IdGenerator()
const hashManager = new HashManager()

export class UserBusiness {
  public createUser = async (input: UserInputDTO) => {
    try {
      const { name, nickname, email, password } = input;

      if (!name || !nickname || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const isEmailValid = ValidateEmail(email)

      if (!isEmailValid || !email) {
        throw new InvalidEmail();
      }

      const isPasswordValid = ValidatePassword(password)

      if (!isPasswordValid) {
        throw new InvalidPassword();
      }

      const id: string = idGenerator.generateId()
      const hashPassword: string = await hashManager.generateHash(password)

      const user: user = {
        id,
        name,
        nickname,
        email,
        password: hashPassword,
      };
      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, id } = input;

      if (!name || !nickname || !id) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name" e "nickname"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginDataDTO) => {
    try {

      const { email, password } = input;
      let token
      const isEmailValid = ValidateEmail(email)

      if (!isEmailValid || !email) {
        throw new InvalidEmail();
      }
      const userDatabase = new UserDatabase()

      const userExists = await userDatabase.getUserByEmail(email)

      if (userExists.length == 0) {
        throw new InvalidUser();
      }

      const compareResult: boolean = await hashManager.compareHash(password, userExists[0].password)
      if (!compareResult) {
        throw new InvalidUserPassword
      } else {
        const authenticator = new Authenticator()

        return token = authenticator.generateToken({ id: userExists[0].id })

      }
      
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserProfile = async (token: string) => {

    const authenticator = new Authenticator()
    const { id } = authenticator.getTokenData(token)

    const userDatabase = new UserDatabase()
    return await userDatabase.getUserById(id)

  }


}
