export function createPerson(firstName: string, lastName?: string,):{
  firstName:string;
  lastName?:string;
}{
  return { 
    firstName,
    lastName
  }
}

export function squarOf(x: any){
  if(typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squarOf(2);

if(squareOfTwoNumber === null){
  console.log('Conta inválida')
}else{
  console.log(squareOfTwoNumber * 100)
}
