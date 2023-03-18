import { RoleEnum } from './../model/class';
import { AuthenticationTokenDTO } from './../model/DTO/authenticatorDTO';
import { IAuthenticator } from './ports/ports';
import { UserRepository } from './repository/userRepository';
import { User } from "../model/class";
import { CustomError } from '../error/customError'

export class UserBusiness {
    constructor(
        private userDatabase: UserRepository,
        private authenticator: IAuthenticator
    ) { }

    public getUserById = async (id: string): Promise<User | undefined> => {
        try {

            const result = await this.userDatabase.getUserById(id)

            if (!result) {
                throw new CustomError(404, 'ID do usuário não encontrado no banco de dados.')
            } else {

                return result
            }

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    };


    public getAllUsers = async (input: AuthenticationTokenDTO): Promise<User[] | undefined> => {
        try {
            const { role } = this.authenticator.getTokenData(input)

            if (role === RoleEnum.ADMIN.toString()) {
                const result = await this.userDatabase.getAllUsers()
                return result
            } else {
                throw new CustomError(422, 'Ação não autorizada para este usuário.')
            }
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    };

    public getUserProfile = async (input: AuthenticationTokenDTO): Promise<User | undefined> => {
        try {
            const { id } = this.authenticator.getTokenData(input)
           
                const result = await this.userDatabase.getUserById(id)
                return result
      
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    };


}
