//Ex01
type CharHashMap = {
    [char: string]: boolean
}

export const findFirstRecurringCharacter = (input: string) => {
    const charHashMap: CharHashMap = {};
    for (const char of input) {
        if (charHashMap[char] === true) {
            return char;
        }
        charHashMap[char] = true;
    }
    return null;
};


//Ex02
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

//Ex03
export const replaceMatrixValue = (
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
): number[][] => {
    if (
        matrix[rowIndex] === undefined ||
        matrix[rowIndex][columnIndex] === undefined
    ) {
        throw new Error("Fora do intervalo da matriz");
    }


    matrix[rowIndex][columnIndex] = value;
    return matrix

};

//Ex04
export function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
    for (let i = 0; i < listOfNumbers.length; i++) {
        if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
            return true;
        }
    }
    return false;
}

//Ex06
export function product(a: number, b: number): number {
    let sum = 0;
    for (let i = 0; i < b; i++) {
        sum += a;
    }
    return sum
}

//Ex07
export function mod(a: number, b: number): number {
    if (b <= a) {
        return -1;
    }
    let div = a / b;
    return a - div * b;
}

//Ex08
export function copyArray(array: number[]): number[] {
    let copy: number[] = [];
    for (const value of array) {
        copy = appendToNew(copy, value);
    }
    return copy;
}

export function appendToNew(array: number[], value: number) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    newArray.push(value);
    return newArray;
}