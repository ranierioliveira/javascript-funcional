//Função anônima
(function (a, b) {
    console.log(a + b);
}) (5, 6);

//Função expressa
const soma = (function(x, y){
    return x + y;
})
console.log(soma(10, 9));

//arrow function
const flecha = (c, d) => c*d;
console.log(flecha(2, 4));

const duplica = w => w*2;
console.log(duplica(16));

//IIFE

(() => console.log("Olá mundo!"))();

((l, v) => console.log(l - v))(5, 2);
