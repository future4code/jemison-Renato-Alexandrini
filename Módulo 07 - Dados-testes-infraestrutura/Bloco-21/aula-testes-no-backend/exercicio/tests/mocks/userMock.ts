import { RoleEnum, User } from './../../src/model/class';

export const userMock = new User(
    'id',
    'TesteNome',
    'teste@teste.com',
    '123456',
    RoleEnum.NORMAL
)

export const userMock2 = new User(
    'id',
    'TesteNome',
    'teste@teste.com',
    '123456',
    RoleEnum.ADMIN
)