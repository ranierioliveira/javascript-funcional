const soma = (...numeros) => {
    console.log(numeros);
    let aux = 0;
    for (c of numeros){
        aux += c;
    }
    return aux;
}

console.log(soma(2, 5, 10, 2));
t