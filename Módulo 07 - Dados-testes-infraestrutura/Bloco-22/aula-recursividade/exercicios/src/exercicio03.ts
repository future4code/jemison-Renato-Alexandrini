// Transforme a função desenvolvida no Exercício 2 em iterativa (ou seja, não use recursividade).

export const calculateSumEX3 = (n: number): number => {
    let sumNumber = 0
    let total = 0
    while (sumNumber <= n) {
        total = total + sumNumber
        sumNumber = sumNumber + 1
    }
    return total
};