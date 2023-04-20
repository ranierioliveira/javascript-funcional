//Método map

let numeros = [2, 4, 6, 8, 10];
let dividePor2 = numeros.map(numeros => numeros/2);
console.log(dividePor2);

//Função filter - Vai retornar valores quando uma condição for verdadeira

let meuArray = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
const par = i => i % 2 === 0;
const impar = i => i % 2 !== 0;

console.log(meuArray.filter(par));
console.log(meuArray.filter(impar));