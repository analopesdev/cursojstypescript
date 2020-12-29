const dadosCliente:[number, string] = [1, 'Luiz']
const dadosCliente1:[number, string, string] = [1, 'Luiz', 'Miranda']
const dadosCliente2:[number, string, string?] = [1, 'Luiz', 'Miranda']

// Restante tudo string
const dadosCliente3:[number, string, ...string[]] = [1, 'Luiz', 'Miranda']

// Bloqueando a mudança de valores com readonly
const dadosCliente4: readonly [number, string, string?] = [1, 'Luiz', 'Miranda']
const dadosClientes4: ReadonlyArray<string> = ['Pedro', 'Fábio']

dadosCliente[0] = 100;
dadosCliente[1] = 'Ana'
dadosCliente1.pop();

// Nenhum valor pode ser alterado por conta do readonly
// dadosCliente4[1] = 'Ana'         x
// dadosCliente4.pop();             x

// Não pode adicionar valores a mais ao array sendo um readonly
// dadosCliente[2] = 'Ana'          x

console.log(dadosCliente)
console.log(dadosCliente1)
console.log(dadosCliente2)