const aluno = {nome: "Bruno", sobrenome:"Campos"};
const notas = {n1: 80, n2: 75, n3:92, n4: 85};
const info =  {...aluno, ...notas} //Concatenação de objetos

//Vai percorrer objetos, onde dado vai ser os atributos existentes no objeto
for (dado in info){
    console.log(info[dado]);
}
