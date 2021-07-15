const vetor = [1,2,3,4,5,6,7,8,9,10];

//se a divisão por 2 tiver um resto igual a zero será mantido
//x recebe a verificação se o número é par 
const pares =vetor.filter (x => x % 2 ===0);

console.log(pares);