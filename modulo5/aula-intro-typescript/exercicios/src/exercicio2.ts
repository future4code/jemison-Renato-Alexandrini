let readlineInput = require("readline-sync");

//Função do tipo void, sem retorno
const ImprimeTresCoresFavoritas = () => {
    let cor1: string = readlineInput.question("Insira sua primeira cor favorita");
    let cor2: string = readlineInput.question("Insira sua segunda cor favorita");
    let cor3: string = readlineInput.question("Insira sua terceira cor favorita");
    console.log([cor1, cor2, cor3]);
};

ImprimeTresCoresFavoritas();


//Função com retorno
let cor1Input: string = readlineInput.question("Insira sua primeira cor favorita");
let cor2Input: string = readlineInput.question("Insira sua segunda cor favorita");
let cor3Input: string = readlineInput.question("Insira sua terceira cor favorita");
let cores: string[] = [];

const ImprimeTresCoresComRetorno = (cor1: string, cor2: string, cor3: string):string[] => {
    cores.push(cor1, cor2, cor3);
    return cores;
};

console.log(ImprimeTresCoresComRetorno(cor1Input, cor2Input, cor3Input));
