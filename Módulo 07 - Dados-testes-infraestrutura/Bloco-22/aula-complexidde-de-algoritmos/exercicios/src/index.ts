import * as ex from './exercicios/exercicios'

//RESPOSTAS NO ARQUIVO EXERCICIO.MD

const inicio1 = performance.now()
ex.findFirstRecurringCharacter('abcdefghijklmnopqrstuvxzz')
const fim1 = performance.now()
console.log('exercicio 1', 'entrada:abcdefghijklmnopqrstuvxzz', '/desempenho', fim1 - inicio1)



const inicio2 = performance.now()
ex.func("inconstitucional", "inconstitucionar")
const fim2 = performance.now()
console.log('exercicio 2', 'entrada:("inconstitucional","inconstitucionar")', '/desempenho', fim2 - inicio2)



const inicio3 = performance.now()
ex.replaceMatrixValue([[10, 20, 30, 40], [50, 60, 70, 80]], 1, 3, 100)
const fim3 = performance.now()
console.log('exercicio 3', 'entrada:([[10,20,30,40],[50,60,70,80]],1,3,100)', '/desempenho', fim3 - inicio3)



const inicio4 = performance.now()
ex.verifyIfExistRepeatedNumbers([10, 20, 30, 40, 50, 60, 70, 80, 90, 10])
const fim4 = performance.now()
console.log('exercicio 4', 'entrada:([10,20,30,40,50,60,70,80,90,10])', '/desempenho', fim4 - inicio4)



const inicio6 = performance.now()
ex.product(10, 100)
const fim6 = performance.now()
console.log('exercicio 6', 'entrada:(10,100)', '/desempenho', fim6 - inicio6)



const inicio7 = performance.now()
ex.mod(999, 1000)
const fim7 = performance.now()
console.log('exercicio 7', 'entrada:(10,100)', '/desempenho', fim7 - inicio7)


const inicio8 = performance.now()
ex.copyArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
const fim8 = performance.now()
console.log('exercicio 8', 'entrada:([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])', '/desempenho', fim8 - inicio8)
