import { } from './../model/DTO/authenticatorDTO';
import { RoleEnum } from './../model/class';
import { AuthenticationDataDTO, AuthenticationTokenDTO, PayloadDataDTO } from '../model/DTO/authenticatorDTO';
import { CustomError } from '../error/customError';
import * as jwt from 'jsonwebtoken'

export class Authenticator {

    public generateToken = (input: AuthenticationDataDTO): string => {

        const token = jwt.sign(
            {id: input.getId(), role: input.getRole() },
            process.env.JWT_KEY as string,
            { expiresIn: "24h" }
        )
        return token
    }

    getTokenData = (token: AuthenticationTokenDTO):PayloadDataDTO => {
        try {
            const payload = jwt.verify(token.getToken(), process.env.JWT_KEY as string)as {id:string, role:string}
           const result = new PayloadDataDTO(payload.id,payload.role as RoleEnum)
            return result
        } catch (error: any) {
            console.log(error.message)
            throw new CustomError(401, "Usuário não autorizado.")
        }
    }

}