//  Any é utilizado apenas em ultimo caso
function showMessage(message: any){
  return message;
}

console.log(showMessage([1, 2, 3]))
console.log(showMessage('Olá'))