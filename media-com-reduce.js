//médias com reduce

const notas = [5.7, 6.4, 7.5, 5.9, 5.7];

const soma = (total, i) => total + i;

const n = notas.length

const media = (notas.reduce(soma))/n;
console.log(media);