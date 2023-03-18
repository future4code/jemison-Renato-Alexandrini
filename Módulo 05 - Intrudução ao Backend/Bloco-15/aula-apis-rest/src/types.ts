export enum USER_TYPE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type User = {
    id: number
    name: string
    email: string
    type: USER_TYPE
    age: number

}