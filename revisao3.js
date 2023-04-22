//Método reduce

// const elementos = [1, 2, 3];

// const somaElementos = (total, i) => total+i;

// console.log(elementos.reduce(somaElementos));

const elementos2 = [1, 2, 3, 5, 8, 9, 10];

const somaNumeros = (total, i) => total + i;
const n = elementos2.length

const media = (elementos2.reduce(somaNumeros)/n).toFixed(2);
console.log(`A média das notas é ${media}.`);


