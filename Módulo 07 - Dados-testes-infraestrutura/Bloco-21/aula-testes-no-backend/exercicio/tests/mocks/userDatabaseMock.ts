import { AuthenticationTokenDTO } from './../../src/model/DTO/authenticatorDTO';
import { User } from '../../src/model/class';
import { UserRepository } from './../../src/business/repository/userRepository';
import { userMock } from './userMock';

export class UserDatabaseMock implements UserRepository {

    public async getUserById(id: string): Promise<User | undefined> {
        return id === 'id' ? userMock : undefined
    }
    public async getAllUsers(): Promise<User[]>{
        return [userMock]
    }
    public async getUserProfile(input:AuthenticationTokenDTO): Promise<User | undefined> {
        return input.getToken() === 'id' ? userMock : undefined
    }
}