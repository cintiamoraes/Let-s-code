
const vetor = [1,2,3,4,5,6];

//0 [é o estado inicial, mas neste aso não é necessário colocar. ]
const soma = vetor.reduce((estado, item) => estado+item, 0);

console.log(soma);