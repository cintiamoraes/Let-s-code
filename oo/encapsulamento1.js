function criaQuadrado(base, altura){

    let cor = 'blue';
  
    return {
      base,
      altura,
      getCor : function() { return cor; }
    };
  
  }
  
  const quadrado = criaQuadrado(3,4);
  console.log(quadrado);
  //IMPRESSÃO:{ base: 3, altura: 4, getCor: [Function: getCor] }

  console.log(quadrado.cor);
  //IMPRESSÃO:undefined

  quadrado.cor = 'red';
  console.log(quadrado.cor);
  //IMPRESSÃO:red
  
  console.log(quadrado.getCor());
  //IMPRESSÃO:blue