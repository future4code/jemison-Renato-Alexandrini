import { printNumbersEX1A, printNumbersEX1B } from "./exercicio01";
import { calculateSumEX2 } from "./exercicio02";
import { calculateSumEX3 } from "./exercicio03";
import { printArrayEX4 } from "./exercicio04";

console.log('exercicio-1A', 'input 10', printNumbersEX1A(10))

console.log('exercicio-1B', 'input 10', printNumbersEX1B(10))

console.log('exercicio-2', 'input 5', calculateSumEX2(5))

console.log('exercicio-3', 'input 3', calculateSumEX3(6))

let array = [3, 6, 9, 12]
console.log('exercicio-4', 'input [3,6,9,12]', printArrayEX4(array))