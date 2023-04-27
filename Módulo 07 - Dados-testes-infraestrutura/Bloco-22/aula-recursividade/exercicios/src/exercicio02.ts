//Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n

export const calculateSumEX2 = (n: number, acc: number = 0): number => {
  if (n === 0) {
    return acc;
  }
  return calculateSumEX2(n - 1, acc + n);
};

