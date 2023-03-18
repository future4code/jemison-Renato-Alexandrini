

const checaAnoBissexto = ((ano: number):boolean => {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
})

const checaAnoBissexto2 = ((ano: number):string => {

    if (ano % 4 === 0 && ano % 100 !== 0) {
      return(`O ano de ${ano} é um ano bissexto`)
    }
    else return (`O ano de ${ano} não é um ano bissexto`)
})

console.log(checaAnoBissexto(1994))

console.log(checaAnoBissexto(2024))

console.log(checaAnoBissexto(2020))

console.log(checaAnoBissexto(1800))



console.log(checaAnoBissexto2(1994))

console.log(checaAnoBissexto2(2024))

console.log(checaAnoBissexto2(2020))

console.log(checaAnoBissexto2(1800))