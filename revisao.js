// const numeros = [4, 8, 10, 12];

// const divideValores = numeros.map(numeros => numeros/2);
// console.log(divideValores);
const soma = (...numeros) => {
    let s = 0
    for (i of numeros){
        s += i;
    }
    return s;
}
console.log(soma(4, 5, 8, 10, 3));