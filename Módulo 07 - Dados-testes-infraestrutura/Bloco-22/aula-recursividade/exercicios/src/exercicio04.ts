
// Escreva uma função recursiva que consiga imprimir todos os elementos de um array

export const printArrayEX4 = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
      printArrayEX4(arr, i - 1);
      console.log(`Elemento ${i}: `, arr[i]);
    }
  };
  

