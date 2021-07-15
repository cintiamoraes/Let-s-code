//é uma sequência de linhas com valores dentro de um vetor

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

//Para percorrer a matriz utilizamos o for que vai percorrer a linha
//Dentro dele utilizamos um outro for para acessar cada um dos elementos dentro do anterior. 
//Depois imprime cada um dos elementos da matriz. 
for (let linha of matriz){
    for(let elemento of linha){
        console.log(elemento);
    }
}