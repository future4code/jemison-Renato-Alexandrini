export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role:RoleEnum
}
export enum RoleEnum {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   role: RoleEnum,
   password: string
}

export interface EditUserInputDTO {
   name: string,
   nickname: string,
   id: string
}

export interface EditUserInput {
   name: string,
   nickname: string,
   id: string
}

export interface LoginDataDTO {
   email: string,
   password: string
}