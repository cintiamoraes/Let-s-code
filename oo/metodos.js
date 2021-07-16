
class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }

    calcularArea() {
        return this.base * this.altura;
    }

    duplicaBase(){
        this.base = 2*this.base;
    }

    //Poderia ser colocado conforme abaixo para imprimir em uma página html
  /*  imprimir(){
        return `<div style='width:${this.base}px;height:${this.altura}px;background-color:${this.cor || "blue"}'></div>`;
      }*/

}

const quadrado = new Quadrado(11, 12);
//console.log(quadrado);
//Quadrado { base: 3, altura: 4, cor: undefined }

quadrado.duplicaBase();

console.log(quadrado.calcularArea());
//12


