import { AuthenticationDataDTO, AuthenticationTokenDTO, PayloadDataDTO } from "../../model/DTO/authenticatorDTO"

export interface IAuthenticator{

    generateToken(input: AuthenticationDataDTO): string
    getTokenData(token: AuthenticationTokenDTO):PayloadDataDTO
} 