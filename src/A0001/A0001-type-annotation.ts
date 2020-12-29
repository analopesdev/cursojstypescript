//  Tipos básicos (aqui ocorre inferência de tipos)
const name: string = "Ana";
const idade: number = 32;
const isAdulto: boolean = false;
let simbolo: symbol = Symbol('qualquer-symbol')

// Array 
let arrayDeNumeros: Array<number> = [1,2,3]
let arrayString: Array<string> = ['Ana', 'Pedro']

// or
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeString2: string[] = ['Ana', 'Pedro']

// Objetos
// ? is opcional
let possoa: {nome: string, idade: number,adulto?: boolean} = {
  idade: 30,
  nome: 'Luiz'
}

console.log(possoa.nome)

// Funções
// function nameFunction(parâmetro: tipo): tipoRetornoDaFunção { Lógica }
function soma3(x: number, y:number): number {
  return x + y;
}

const result = soma3(2, 4)
console.log(result)


// Função atribuída a uma variável
// const nomeDaVariavel: (parâmetro:tipo) => retornoTipo = (parametro) => Lógica
const soma2: (x: number, y: number) => number = (x, y) => x + y;