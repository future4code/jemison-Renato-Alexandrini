import { CustomError } from './../../src/error/customError';
import { AuthenticatorMock } from '../mocks/authenticatorMock';
import { UserDatabaseMock } from '../mocks/userDatabaseMock';
import { UserBusiness } from '../../src/business/userBusiness';
import { AuthenticationTokenDTO } from '../../src/model/DTO/authenticatorDTO';

const userBusiness = new UserBusiness(new UserDatabaseMock(), new AuthenticatorMock())

describe('Testes do endpoint getUserById', () => {
    test('Erro usuário não existente', async () => {
        expect.assertions(2)
        try {
            await userBusiness.getUserById('idInexistente')

        } catch (error: any) {
            //Meu StatusCode não consigo alterar ele, continua sempre como 400, mesmo sendo uma instancia de CustomError
            expect(error).toBeInstanceOf(CustomError)
            expect(error.message).toBe('ID do usuário não encontrado no banco de dados.')
        }
    })

    test('Sucesso no endpoint', async () => {
        expect.assertions(1)
        const result = await userBusiness.getUserById('id')

        expect(result).toEqual({ id: 'id', name: 'TesteNome', email: 'teste@teste.com', password: '123456', role: 'NORMAL' })
    })
})

describe('Testes do endpoint getAllUsers', () => {

    test('Erro Ação não autorizada para a role da conta', async () => {
        expect.assertions(1)
        try {

            const input = new AuthenticationTokenDTO('NORMAL')
            await userBusiness.getAllUsers(input)

        } catch (error: any) {
        
            expect(error.message).toBe('Ação não autorizada para este usuário.')
        }
    })

    test('Sucesso no endpoint', async () => {
        expect.assertions(1)
        const input = new AuthenticationTokenDTO('ADMIN')
   
        const result = await userBusiness.getAllUsers(input)

        expect(result).toEqual([{ id: 'id', name: 'TesteNome', email: 'teste@teste.com', password: '123456', role: 'NORMAL' }])
    })
})

describe('Testes do endpoint getUserProfile', () => {

    test('Sucesso no endpoint', async () => {
        expect.assertions(1)
        const input = new AuthenticationTokenDTO('id')
   
        const result = await userBusiness.getUserProfile(input)

        expect(result).toEqual({ id: 'id', name: 'TesteNome', email: 'teste@teste.com', password: '123456', role: 'NORMAL' })
    })

   })
