const pessoa = {nome: 'Lucas', idade: 26};
console.log(pessoa.nome);

const quadrado = {
    base:10,
    altura:20,
    calculaArea: function(){return this.base*this.altura}//método calculaArea. THIS retorna um atributo que pertence ao próprio objeto. 
}; 

console.log(quadrado.calculaArea());


