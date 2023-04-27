# Exercícios da aula de complexidade de Algoritmos


### Determine a complexidade dos seguintes algoritmos, deixando a sua resposta comentada no código.


### Exercício 01:
```
const findFirstRecurringCharacter = (input) => {
  const charHashMap = {};
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char;
    }
    charHashMap[char] = true;
  }
  return null;
}; 
```
#### R)- A complexidade será determinada pelo input.length - O(n)
#### exercicio 1 entrada:abcdefghijklmnopqrstuvxzz /desempenho 0.1429000049829483



### Exercício 02:
```
export const func = (
  source: string,
  comparison: string
): boolean => {
  if (
    comparison.length > source.length + 1 ||
    comparison.length < source.length - 1
  ) {
    return false;
  }
  let commonCharQuantity = 0;

  for (const char of comparison) {
    if (source !== comparison) {
      commonCharQuantity++;
    }
  }
  return (
    commonCharQuantity <= source.length + 1 &&
    commonCharQuantity >= source.length - 1
  );
};
``` 
#### R)- A complexidade será determinada pelo source.length ou comparsion.length, pois eles precisam ter o memso tamanho - O(n)
#### exercicio 2 entrada:("inconstitucional","inconstitucionar") /desempenho 0.13340000063180923



### Exercício 03:
```
export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};
```
#### R)- A complexidade será determinada pelo matrix.length e pela linha e coluna escolhidas para substituição - O(n)
#### exercicio 3 entrada:([[10,20,30,40],[50,60,70,80]],1,3,100) /desempenho 0.0567999929189682



### Exercício 04:
```
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}
```
#### R)- A complexidade será determinada pelo number.length - O(n)
#### Após olhar a resposta, acabei entendo o motivo do correto ser - O(n^2) realmente não tinha levado em conta que a função indexof percorre todo o array, até por isso ele parecia simples mas foi o que teve o pior desempenho em relação aos outros exercícios.
#### exercicio 4 entrada:([10,20,30,40,50,60,70,80,90,10]) /desempenho 0.25039999186992645



### Exercício 05:
### Coloque, em ordem de eficiência, os 4 algoritmos que você teve que calcular a complexidade:
#### R) Segundo os resultados da função performance a ordem de eficiência das funções são:
#### Exercício 03 - desempenho 0.0567999929189682 / exercício 02 - desempenho 0.13340000063180923 / exercício 01 - desempenho 0.1429000049829483 / exercício 04 desempenho 0.25039999186992645



### Exercício 06:
```
function product(a: number, b: number): number {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum
}
```
#### R)- A complexidade será determinada pelo valor de b - O(n)
#### exercicio 6 entrada:(10,100) /desempenho 0.37880000472068787



### Exercício 07:
```
function mod(a: number, b: number): number {
  if (b <= a) {
    return -1;
  }
  let div = a / b;
  return a - div * b;
}
```
#### R)- A complexidade será igual independente dos valores adicionados, pois sempre vai seguir as operações de divisão e da multiplicação de b por a-div - O(2)
#### exercicio 7 entrada:(10,100) /desempenho 0.15850000083446503



### Exercício 08:
```
function copyArray(array: number[]): number[] {
  let copy: number[] = [];
  for (const value of array) {
    copy = appendToNew(copy, value);
  }
  return copy;
}

function appendToNew(array: number[], value: number) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  newArray.push(value);
  return newArray;
}
```
#### R)- A complexidade da função copyArray será determinada pelo copy.length que será verificado dentro do copyArray e dentro da função appendToNew, por estar sendo executada dentro do copyArray - O(n^2)
#### e a comlexidade da função appendToNew será determinada pelo array.length - O(n)
#### exercicio 8 entrada:([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]) /desempenho 0.26100000739097595