// const objetoA: {
//   readonly chaveA: string, 
//   chaveB: string,
//   chaveC?: string, 
//   [key : string]: unknown,
// } = {
//   chaveA: 'Valor A',
//   chaveB: 'Valor B'
// }

const objetoA: {
  readonly chaveA: string, 
  chaveB: string,
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B'
};

// Não pode ser alterada
// objetoA.chaveA = 'Outro valor';

//  É possível alterar o valor do objeto
objetoA.chaveB = 'Nova chave';

//  Não é possível inserir valores ao objeto
// objetoA.chaveD = 'Nova chave';
