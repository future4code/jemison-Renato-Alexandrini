import { PostDatabase } from './../src/exercicio06/data/postsDatabase';
import { TypeEnum } from '../src/exercicio06/model/class/postClass';
import * as ex3 from '../src/ecercicio03';
import { Exercicio01 } from '../src/exercicio01';
import { LOCATION, NACIONALITY } from '../src/ecercicio03';
import { PostClass } from '../src/exercicio06/model/class/postClass';



describe('Teste do saldo so usuário referente ao exercicio 01', () => {
    test('exercicio02A', () => {
        expect(Exercicio01({ name: 'Renato', balance: 1000 }, 800)).toEqual({ name: 'Renato', balance: 200 })
    })

    test('exercicio02b', () => {
        expect(Exercicio01({ name: 'Renato', balance: 1000 }, 1000)).toEqual({ name: 'Renato', balance: 0 })
    })

    test('exercicio02C', () => {
        expect(Exercicio01({ name: 'Renato', balance: 1000 }, 1100)).toEqual(undefined)
    })
})

describe('Teste da fila de cassino referente ao exercicio 03', () => {
    test('exercicio04A', () => {

        const casino: ex3.Casino = {
            name: 'CassinoBR',
            location: LOCATION.BRAZIL,
        };
        const user: ex3.User = {
            name: 'Renato',
            age: 18,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const result = ex3.Exercicio03(casino, [user])
        expect(result.brazilians.allowed).toEqual(['Renato'])
    })

    test('exercicio04B', () => {

        const casino: ex3.Casino = {
            name: 'CassinoBR',
            location: LOCATION.BRAZIL,
        };
        const user: ex3.User = {
            name: 'Howard',
            age: 18,
            nacionality: NACIONALITY.AMERICAN
        }
        const result = ex3.Exercicio03(casino, [user])
        expect(result.americans.allowed).toEqual(['Howard'])
    })

    test('exercicio04C', () => {

        const casino: ex3.Casino = {
            name: 'CassinoUSA',
            location: LOCATION.EUA,
        };
        const userBR1: ex3.User = {
            name: 'Renato',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const userBR2: ex3.User = {
            name: 'Leonardo',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const userUS1: ex3.User = {
            name: 'Howard',
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const userUS2: ex3.User = {
            name: 'Peter',
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        let userArray = [userBR1, userBR2, userUS1, userUS2]
        const result = ex3.Exercicio03(casino, userArray)
        expect(result.brazilians.unallowed).toEqual(['Renato', 'Leonardo'])
        expect(result.americans.unallowed).toEqual(['Howard', 'Peter'])
    })

    test('exercicio04D', () => {
        const casino: ex3.Casino = {
            name: 'CassinoUSA',
            location: LOCATION.EUA,
        };
        const userBR1: ex3.User = {
            name: 'Renato',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const userBR2: ex3.User = {
            name: 'Leonardo',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const userUS1: ex3.User = {
            name: 'Howard',
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const userUS2: ex3.User = {
            name: 'Peter',
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        let userArray = [userBR1, userBR2, userUS1, userUS2]
        const result = ex3.Exercicio03(casino, userArray)
        expect(result.brazilians.unallowed).toEqual(['Renato', 'Leonardo'])
        expect(result.americans.allowed).toEqual(['Howard', 'Peter'])
    })
})

describe('Exercicio 05 - Teste da fila de cassino referente ao exercicio 03', () => {
    test('exercicio05A', () => {

        const casino: ex3.Casino = {
            name: 'CassinoBR',
            location: LOCATION.BRAZIL,
        };
        const user: ex3.User = {
            name: 'Renato',
            age: 30,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const result = ex3.Exercicio03(casino, [user])
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })

    test('exercicio05B', () => {

        const casino: ex3.Casino = {
            name: 'CassinoUSA',
            location: LOCATION.EUA,
        };
        const user: ex3.User = {
            name: 'Renato',
            age: 30,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const result = ex3.Exercicio03(casino, [user])
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })

    test('exercicio05C', () => {

        const casino: ex3.Casino = {
            name: 'CassinoUSA',
            location: LOCATION.EUA,
        };
        const userBR1: ex3.User = {
            name: 'Renato',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const userBR2: ex3.User = {
            name: 'Leonardo',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const userUS1: ex3.User = {
            name: 'Howard',
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const userUS2: ex3.User = {
            name: 'Peter',
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        let userArray = [userBR1, userBR2, userUS1, userUS2]
        const result = ex3.Exercicio03(casino, userArray)
        expect(result.brazilians.unallowed).toContain('Renato' || 'Leonardo')
        expect(result.americans.unallowed).toContain('Howard' || 'Peter')
    })

    test('exercicio05D', () => {

        const casino: ex3.Casino = {
            name: 'CassinoUSA',
            location: LOCATION.EUA,
        };
        const userBR1: ex3.User = {
            name: 'Renato',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const userBR2: ex3.User = {
            name: 'Leonardo',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const userUS1: ex3.User = {
            name: 'Howard',
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const userUS2: ex3.User = {
            name: 'Peter',
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        let userArray = [userBR1, userBR2, userUS1, userUS2]
        const result = ex3.Exercicio03(casino, userArray)
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toBe(2)
    })

})

const postDatabase = new PostDatabase
describe('Exercicio 06 - Teste de criação de post Labook', () => {
    test('exercicio06-AeB', async () => {

        const newPost = new PostClass(
            'IDdoPost',
            'url da foto',
            'descrição do post',
            TypeEnum.NORMAL,
            '81199684-e6e0-48a3-9bac-ff29256904e2'
        );


        await postDatabase.insertPost(newPost)
        const result = await postDatabase.getPostById({ postId: newPost.getId() })

        expect(result).not.toBe(undefined)
        //Eu acabei mudando o que foi pedido no exercício, eu não conseguiria usar o .toEqual, por conta do data de criação do post
        expect(result.length).toBe(1)
    })
    afterAll(async () => {
        await postDatabase.deletePost('IDdoPost');
        return postDatabase.destroy()

    });

})

describe('Exercicio 08 - Teste do Feed do Labook', () => {
    test('exercicio08A', async () => {
        try {
        //Pesquisar como testar quando o endpoint pracisa de autenticação
        } catch (err) {
           
        }
    })
})
