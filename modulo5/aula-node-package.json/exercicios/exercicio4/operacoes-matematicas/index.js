

let operacaoInput = process.argv[2]
let num1Input = Number(process.argv[3])
let num2Input = Number(process.argv[4])
let resultado = 0

const OperacoesMatematicas = ((operacao, num1, num2) => {

    if (/[0-9]/.test(num1) == false || /[0-9]/.test(num2) == false) {
        return (console.log("Após escolher a operação, você deve digitar dois numeros"))
    }
    else if (operacao == 'add') {
        return console.log(`O resultado da some é: ${resultado = num1 + num2}`)
    }
    else if (operacao === 'sub') {
        return console.log(`O resultado da subtração é: ${resultado = num1 - num2}`)
    }
    else if (operacao === 'mult') {
        return console.log(`O resultado da multiplição é: ${resultado = num1 * num2}`)
    }
    else if (operacao === 'div') {
        return console.log(`O resultado da divisão é: ${resultado = num1 / num2}`)
    }
    else { console.log('Escolha uma das operações matemáticas: add, sub, mult ou div') }

})

OperacoesMatematicas(operacaoInput, num1Input, num2Input)

