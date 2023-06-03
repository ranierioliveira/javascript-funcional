const soma = (...numeros) => {
    console.log(numeros);
    let aux = 0;
    for (let c of numeros){
        aux += c;
        console.log(aux)
    }
    return aux;
}

console.log(soma(2, 5, 10, 2, 10));
