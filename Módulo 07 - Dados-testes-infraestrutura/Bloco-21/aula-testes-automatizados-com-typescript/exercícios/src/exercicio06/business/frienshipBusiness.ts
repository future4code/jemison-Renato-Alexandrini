import { UserRepository } from './repository/userRepository';
import { FriendshipClass } from '../model/class/friendshipClass';
import { FriendshipInput, CreationFriendshipReturnDTO } from '../model/DTO/friendshipDTO';
import { FriendshipRepository } from './repository/friendshipRepository';
import { CustomError } from '../error/customError';
import { Authenticator } from '../services/authenticator';
import * as err from '../error/friendshipError';

export class FriendshipBusiness {
    constructor(
        private friendshipDatabase: FriendshipRepository,
        private userDatabase: UserRepository
    ) { }

    public createFriendship = async (input: FriendshipInput, token: string): Promise<CreationFriendshipReturnDTO> => {

        try {

            const authenticator = new Authenticator()
            const { id } = authenticator.getTokenData(token)

            if (!input.userReciever) {
                throw new err.MissingRecieverID()
            }
            if (id === input.userReciever) {
                throw new err.InvalidFriendId()
            }
            const userExists = await this.userDatabase.userExists(input.userReciever)
            if (!userExists) {
                throw new err.NonexistentFrined()
            }

            const friendshipExists = await this.friendshipDatabase.friendshipExists({ senderId: id, recieverId: input.userReciever })

            if (friendshipExists.length > 0) {
                throw new err.FriendshipAlreadyExists()
            }

            const newFriendship = new FriendshipClass(
                id,
                input.userReciever
            )

            await this.friendshipDatabase.insertFriendship(newFriendship)

            return { message: 'Amizade criada com sucesso.', friendship: newFriendship }


        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    public deleteFriendship = async (input: FriendshipInput, token: string): Promise<string> => {

        try {

            const authenticator = new Authenticator()
            const { id } = authenticator.getTokenData(token)

            if (!input.userReciever) {
                throw new err.MissingDeleteFriendshipID()
            }
            if (id === input.userReciever) {
                throw new err.InvalidDeleteFriendId()
            }
            const userExists = await this.userDatabase.userExists(input.userReciever)
            if (!userExists) {
                throw new err.NonexistentFrined()
            }

            const friendshipExists = await this.friendshipDatabase.friendshipExists({ senderId: id, recieverId: input.userReciever })

            if (friendshipExists.length == 0) {
                throw new err.FriendshipNonexist()
            }

            if (friendshipExists.length > 0) {

                await this.friendshipDatabase.deleteFriendship({ senderId: id, recieverId: input.userReciever })



                return 'Amizade deletada com sucesso.'
            }

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }
}