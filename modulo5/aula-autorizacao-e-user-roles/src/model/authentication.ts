import { RoleEnum } from './user';

export type AuthenticationData ={
    id: string
    role:string
}

export interface AuthenticationTokenDTO {
token: string    
}