//map 

/*Nesse programa as notas de um classe foram alteradas, a maior nota passou a ser 10 e as demais se alteraram proporcionalmente a partir da maior nota.*/

//array com as notas dos estudantes
let estudantes = [
    { nome: "José", nota: 5.7 },
    { nome: "Raníeri", nota: 7.5 },
    { nome: "Maria",  nota:7.4 },
    { nome: "Júlia", nota: 3.75},

]

//array com as notas
let notas = [];

for (pos in estudantes){
    notas.push(estudantes[pos].nota); 
}

let maiorNota = Math.max.apply(null, notas); //guardou a maior nota

//map para alterar as notas e retornar um array com as notas alteradas
let notasNormalizadas = estudantes.map(estudantes => (estudantes.nota * 10 / maiorNota).toFixed(2));

console.log(notasNormalizadas);
