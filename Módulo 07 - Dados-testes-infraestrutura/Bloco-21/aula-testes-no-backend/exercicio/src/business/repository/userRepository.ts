import { User } from "../../model/class"


export interface UserRepository{
    
    getUserById(id: string): Promise<User | undefined>
    getAllUsers(): Promise<User[] | undefined>
}