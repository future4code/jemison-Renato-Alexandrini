import { validateCharacter, performAttack } from './../src/functions';
import { Character } from "../src/interfaces";


describe('Testes da função validadetCharacter', () => {
    test('exercicio02A - sem nome', () => {

        const character: Character = {
            name: '',
            life: 1500,
            strength: 500,
            defense: 300
        };
        const result = validateCharacter(character)
        expect(result).toEqual(false)
    })

    test('exercicio02B - vida igual a zero', () => {

        const character: Character = {
            name: 'Character',
            life: 0,
            strength: 500,
            defense: 300
        };
        const result = validateCharacter(character)
        expect(result).toEqual(false)
    })

    test('exercicio02C - força igual a zero', () => {

        const character: Character = {
            name: 'Character',
            life: 1500,
            strength: 0,
            defense: 300
        };
        const result = validateCharacter(character)
        expect(result).toEqual(false)
    })

    test('exercicio02D - defesa igual a zero', () => {

        const character: Character = {
            name: 'Character',
            life: 1500,
            strength: 500,
            defense: 0
        };
        const result = validateCharacter(character)
        expect(result).toEqual(false)
    })

    test('exercicio02E - um valor negativo', () => {

        const character: Character = {
            name: 'Character',
            life: 1500,
            strength: -500,
            defense: 300
        };
        const result = validateCharacter(character)
        expect(result).toEqual(false)
    })

    test('exercicio02F - Todas as informações válidas', () => {

        const character: Character = {
            name: 'Character',
            life: 1500,
            strength: 500,
            defense: 300
        };
        const result = validateCharacter(character)
        expect(result).toEqual(true)
    })
})


const validatorMockTrue = jest.fn(() => {
    return true
})
const validatorMockFalse = jest.fn(() => {
    return false
})

describe('Testes da função performaAttack', () => {
    test('exercicio05A - Função com Mock de validateCharacter', () => {

        const attacker: Character = {
            name: 'Character01',
            life: 1500,
            strength: 500,
            defense: 300
        };

        const defender: Character = {
            name: 'Character02',
            life: 1500,
            strength: 500,
            defense: 300
        };

        performAttack(attacker, defender, validatorMockTrue)

        expect(defender.life).toEqual(1300);
        expect(validatorMockTrue).toHaveBeenCalled();
        expect(validatorMockTrue).toHaveBeenCalledTimes(2);
        expect(validatorMockTrue).toHaveReturnedTimes(2);
    })
})

describe('Testes da função performaAttack', () => {
    test('exercicio05B - Função com Mock de validateCharacter com funções invalidas', () => {
        expect.assertions(4);
        const attacker: Character = {
            name: 'Character01',
            life: 1500,
            strength: 500,
            defense: 300
        };

        const defender: Character = {
            name: 'Character02',
            life: 1500,
            strength: 500,
            defense: 300
        };
        try {
            performAttack(attacker, defender, validatorMockFalse)
        } catch (error: any) {
            expect(error.message).toEqual("Invalid character");
            expect(validatorMockFalse).toHaveBeenCalled();
            expect(validatorMockFalse).toHaveBeenCalledTimes(1);
            expect(validatorMockFalse).toHaveReturnedTimes(1);
        }
    })
})


describe('Testes do Exercicio 06', () => {
    test('defesa maior que ataque', () => {
        expect.assertions(3);
        const attacker: Character = {
            name: 'Character01',
            life: 1500,
            strength: 500,
            defense: 300
        };

        const defender: Character = {
            name: 'Character02',
            life: 1500,
            strength: 500,
            defense: 600
        };
        try {
            const result = performAttack(attacker, defender, validatorMockTrue)
            expect(result).toEqual('Defesa maior que o ataque')
            expect(validatorMockTrue).toHaveBeenCalled();
            expect(validatorMockTrue).toHaveBeenCalledTimes(2);
       
        } catch (error: any) {
        }
    })

    test('Defensor com 0 pontos de vida', () => {
        expect.assertions(3);
        const attacker: Character = {
            name: 'Character01',
            life: 1500,
            strength: 1000,
            defense: 300
        };

        const defender: Character = {
            name: 'Character02',
            life: 900,
            strength: 500,
            defense: 100
        };
        try {
            const result = performAttack(attacker, defender, validatorMockTrue)
            expect(result).toEqual('Defensor faleceu')
            expect(validatorMockTrue).toHaveBeenCalled();
            expect(validatorMockTrue).toHaveBeenCalledTimes(2);
   
        } catch (error: any) {
        }
    })

    test('Defensor com finaliza com vida negativa', () => {
        expect.assertions(3);
        const attacker: Character = {
            name: 'Character01',
            life: 1500,
            strength: 2000,
            defense: 300
        };

        const defender: Character = {
            name: 'Character02',
            life: 300,
            strength: 500,
            defense: 100
        };
        try {
            const result = performAttack(attacker, defender, validatorMockTrue)
            expect(result).toEqual('Defensor faleceu')
            expect(validatorMockTrue).toHaveBeenCalled();
            expect(validatorMockTrue).toHaveBeenCalledTimes(2);
   
        } catch (error: any) {
        }
    })
})