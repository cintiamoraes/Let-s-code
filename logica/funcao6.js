//funções de alta ordem 
//usa-se a função somarX para construir outras funções

const somarX = (x) => (y) => x+y;

const somar2= somarX(2);

console.log(somar2(5));


