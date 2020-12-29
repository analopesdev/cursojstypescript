// Array<> - T[]
const array: number[] = [1, 2, 3, 4]

export const array2: Array<string> = ['Ana', 'Felipe', 'Pedro']
console.log(array)

export function multiplicaArgs(...args: Array<number>): number{
  return args.reduce((ac, valor) => ac *  valor, 1)
}

export function concatenaString(...args: string[]): string{
  return args.reduce((ac, valor) => ac + valor)
}

export function toUpperCase(...args: string[]): string[]{
  return args.map((valor) => valor.toUpperCase())
}

const result1 = multiplicaArgs(2, 2, 2)
const concatenacao = concatenaString('a', 'b', 'c')
const upper = toUpperCase('a', 'b', 'c')

console.log(upper)
console.log(result1)
console.log(concatenacao)