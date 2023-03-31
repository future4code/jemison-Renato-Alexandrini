// Exercício 1
    
// Escreva uma função recursiva que:
    
// A) Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente                                           

export const printNumbersEX1A = (n: number) => {
    if (n >= 0) {
      printNumbersEX1A(n - 1);
      console.log(n);
    }
  };

  //B) Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente
  export const printNumbersEX1B = (n: number) => {
    if (n >= 0) {
      console.log(n);
      printNumbersEX1B(n - 1);
    }
  };
  