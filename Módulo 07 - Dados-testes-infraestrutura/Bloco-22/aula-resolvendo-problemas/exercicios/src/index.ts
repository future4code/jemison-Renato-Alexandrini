import { isOneEdit } from "./exercicios/exercicio1";
import { stringCompression } from "./exercicios/exercicio2";

//Exercício1

console.log('exercicio1', 'expected true', isOneEdit('corroça','carroça'))
console.log('exercicio1', 'expected true', isOneEdit('amartelo','martelo'))
console.log('exercicio1', 'expected true', isOneEdit('dinheiro','dinheiror'))
console.log('exercicio1', 'expected false', isOneEdit('azul','bazule'))
console.log('exercicio1', 'expected false', isOneEdit('serviço','sorviçe'))


console.log('exercicio2', stringCompression('permissão'))
console.log('exercicio2', stringCompression('permissssssssssssssssssssssssssão'))
console.log('exercicio2', stringCompression('aaaazzzuuulllllll'))
console.log('exercicio2', stringCompression('papagaio'))

