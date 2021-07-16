class Quadrado{
  
    constructor(lado, altura){
      this._cor = 'blue';
      this.lado = lado;
      this.altura = altura;
    }
  
    get cor() { return this._cor; }
    set cor(cor) { this._cor = cor; }
  }
  
  //Criamos uma nova isntância e redefinimos o atributo cor
  const quadrado = new Quadrado(3,4);
  console.log(quadrado);
  //Impressão: Quadrado { cor: 'blue', lado: 3, altura: 4 }

  console.log(quadrado.cor);
  //impressão: blue

  quadrado.cor = 'red';
  console.log(quadrado.cor);
  //red