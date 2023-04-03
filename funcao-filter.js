 const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const par = i => i % 2 === 0;
 const impar = i => i % 2 === 1;

 console.log(meuArray.filter(par));
 console.log(meuArray.filter(impar));