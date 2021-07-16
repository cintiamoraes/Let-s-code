//classe pai
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

//classe filho. O nome extends define que vai herdar todos os atributos e métodos do anterior (pai)
class Cidadao extends Pessoa{
    constructor(nome, idade, cpf, rg){
        super(nome, idade);//supe se refere à classe superior à que ela está
        this.rg = rg;
        this.cpf = cpf;
            }
}

//instância
const cidadao = new Cidadao('Cintia', 40, "0000", "1111")
console.log(cidadao);

console.log(cidadao instanceof Cidadao);//verifica se o objeto é do mesmo tipo

console.log(cidadao instanceof Pessoa);



