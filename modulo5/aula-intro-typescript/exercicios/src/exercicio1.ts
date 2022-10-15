let triangulo: string = ''

function checaTriangulo(a: number, b: number, c: number): string {
  if (a !== b && b !== c) {
    return triangulo = "Escaleno";
  } else if (a === b && b === c) {
    return triangulo = "Equilátero";
  } else {
    return triangulo = "Isósceles";
  }
}


console.log(checaTriangulo(20, 20, 10))

console.log(checaTriangulo(20, 20, 20))

console.log(checaTriangulo(20, 10, 30))