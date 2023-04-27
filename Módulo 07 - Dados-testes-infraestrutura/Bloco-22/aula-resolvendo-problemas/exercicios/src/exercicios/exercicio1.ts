
/*
Exercício 01

Considere que a gente só possa fazer três operações com string: adicionar um caractere ao final dele,
remover um caractere do final dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit'
de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine
se uma string é  'one edit' de outra.

- Exemplos
     `"banan"` é 'one edit' de `"banana"` (remoção de um caracter)
     `"bananak"` é 'one edit' de `"banana"` (adição de um caracter)
     `"panana"` é 'one edit' de `"banana"` (troca de um caracter)
     `"bananaaa"` **não** é 'one edit' de `"banana"` (adição de dois caracteres)
*/


export function isOneEdit(modifiedWord: string, originalWord: string): boolean {

//a função Math.abs vai ignorar se o número é positivo ou negativo, pegando apenas o número
//então independente qual palavra é maior a subtração sempre vai retornar um valor positivo.
    if (Math.abs(modifiedWord.length - originalWord.length) > 1) {
        return false
    }
   
    if (modifiedWord.length > originalWord.length) return modifiedWord.includes(originalWord)
    if (originalWord.length > modifiedWord.length) return originalWord.includes(modifiedWord)

    let charsDiffCount = 0
    for (let i = 0; i < originalWord.length; i++) {
        if (originalWord[i] !== modifiedWord[i]) charsDiffCount++
    }

    return charsDiffCount === 1
}