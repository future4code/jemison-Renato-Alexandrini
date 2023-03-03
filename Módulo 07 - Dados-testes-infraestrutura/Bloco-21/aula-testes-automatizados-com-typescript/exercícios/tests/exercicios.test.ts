import * as ex3 from '../src/ecercicio03';
import { Exercicio01 } from '../src/exercicio01';
import { LOCATION, NACIONALITY } from '../src/ecercicio03';

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
        const user:ex3.User = {
            name: 'Renato',
            age: 18,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const result = ex3.Exercicio03(casino,[user])
        expect(result.brazilians.allowed).toEqual(['Renato'])
    })

    test('exercicio04B', () => {
       
        const casino: ex3.Casino = {
            name: 'CassinoBR',
            location: LOCATION.BRAZIL,
          };
        const user:ex3.User = {
            name: 'Howard',
            age: 18,
            nacionality: NACIONALITY.AMERICAN
        }
        const result = ex3.Exercicio03(casino,[user])
        expect(result.americans.allowed).toEqual(['Howard'])
    })

    test('exercicio04C', () => {
       
        const casino: ex3.Casino = {
            name: 'CassinoUSA',
            location: LOCATION.EUA,
          };
        const userBR1:ex3.User = {
            name: 'Renato',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const userBR2:ex3.User = {
            name: 'Leonardo',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const userUS1:ex3.User = {
            name: 'Howard',
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const userUS2:ex3.User = {
            name: 'Peter',
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        let userArray =[userBR1,userBR2, userUS1, userUS2]
        const result = ex3.Exercicio03(casino,userArray)
        expect(result.brazilians.unallowed).toEqual(['Renato','Leonardo'])
        expect(result.americans.unallowed).toEqual(['Howard','Peter'])
    })

    test('exercicio04D', () => {
       
        const casino: ex3.Casino = {
            name: 'CassinoUSA',
            location: LOCATION.EUA,
          };
        const userBR1:ex3.User = {
            name: 'Renato',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const userBR2:ex3.User = {
            name: 'Leonardo',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const userUS1:ex3.User = {
            name: 'Howard',
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const userUS2:ex3.User = {
            name: 'Peter',
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        let userArray =[userBR1,userBR2, userUS1, userUS2]
        const result = ex3.Exercicio03(casino,userArray)
        expect(result.brazilians.unallowed).toEqual(['Renato','Leonardo'])
        expect(result.americans.allowed).toEqual(['Howard','Peter'])
    })
})
