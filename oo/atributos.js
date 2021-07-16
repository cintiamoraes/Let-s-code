//Atributos

class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "informação não numérica";
            this.base = base;
            this.altura = altura;
           // this.cor = undefined;//atributo opcional
    }
}

const quadrado = new Quadrado(11, 12);
quadrado.cor = 'azul';
console.log(quadrado);