import { IAuthenticator } from './../../src/business/ports/ports';

export class AuthenticatorMock implements IAuthenticator {

    public generateToken = jest.fn(() => {
        return 'token'
    })

    public getTokenData = jest.fn((input) => {
        return { id:input.getToken(), role: input.getToken() }

    })
}
