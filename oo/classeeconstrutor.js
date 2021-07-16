//Classes e construtores

class Pessoa{
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Cintia', 40);
pessoa1.idade = 44;
console.log(pessoa1.nome, pessoa1.idade);

const pessoa2 = new Pessoa('Laura', 36);
console.log(pessoa2.nome, pessoa2.idade);

