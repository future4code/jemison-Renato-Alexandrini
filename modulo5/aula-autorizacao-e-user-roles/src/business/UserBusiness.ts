import { Authenticator } from './../services/authenticator';
import { LoginDataDTO, RoleEnum } from './../model/user';
import { InvalidPassword, InvalidUser, InvalidUserPassword, WrongRole, Unauthorized } from './../error/customError';
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

export class UserBusiness {
  public createUser = async (input: UserInputDTO) => {
    try {

      let newRole
      const { name, nickname, email, role, password } = input;

      if (!name || !nickname || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }
      if (!role || role.toLocaleUpperCase() == "NORMAL") {
        newRole = RoleEnum.NORMAL
      } else if (role.toUpperCase() == "ADMIN") {
        newRole = RoleEnum.ADMIN
      } else {
        throw new WrongRole()
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

      const user: user = {
        id,
        name,
        nickname,
        email,
        password,
        role: newRole
      };
      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const authenticator = new Authenticator()
  
      let token = authenticator.generateToken({id:id, role:user.role})
      return token

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
      userExists.map((user) => {
        if (user.password === password) {
          const id = user.id
          const authenticator = new Authenticator()

         token = authenticator.generateToken({id:id, role:user.role})
      
        } else {
          throw new InvalidUserPassword()
        }
      })

      return token



    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserProfile = async (token: string) => {

    const authenticator = new Authenticator()
    const { id , role } = authenticator.getTokenData(token)


    if(role !== RoleEnum.NORMAL){
      throw new Unauthorized()
    }else{

    const userDatabase = new UserDatabase()
    return await userDatabase.getUserById(id)

  }
  }
}
