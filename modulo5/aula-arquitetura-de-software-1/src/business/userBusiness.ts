import { UserClass } from './../models/userClass';
import { UserDatabase } from './../data/userDatabase';

export class UserBusiness {

    createUser = async (input: any): Promise<void> => {

        try {
            const { name, email, password } = input

            if (!name) {
                throw new Error('Nome do usuário faltando')
            }
            if (!email) {
                throw new Error('Email do usuário faltando')
            }
            if (!password) {
                throw new Error('Password do usuário faltando')
            }
            if (password.length < 6) {
                throw new Error('A senha precisa ter no mínimo 6 caracteres')
            }

            const userDatabase = new UserDatabase()

            const emailExists = await userDatabase.UserEmailExists(input.email)
            console.log(emailExists)
            if (emailExists.length > 0) {
                throw new Error('Email cadastrado em outro usuário')
            } else {
                const id: string = Date.now().toString()

                const newUser = new UserClass(
                    id,
                    input.name,
                    input.email,
                    input.password
                )

                await userDatabase.insertUser(newUser)

            }
        } catch (error: any) {
            throw new Error(error.message)
        }
    }


    getAllUsers = async (): Promise<void> => {

        try {
            const userDatabase = new UserDatabase()
            return await userDatabase.GetAllUsers()

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}

