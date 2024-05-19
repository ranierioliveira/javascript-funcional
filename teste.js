let pessoa = {
    nome: "João", 
    idade: 22,
    sobrenome: "Oliveira"
  }
  pessoa["idade"] = 35;
  pessoa["profissão"] = "Advogado";

  let familia = [
    pessoa, 
    {
      nome: "Maria", 
      idade: 32,
      sobrenome: "Oliveira"
    },
    {
      nome: "José", 
      idade: 7,
      sobrenome: "Oliveira"
    }
  ]

  familia.push({
    nome: "Alice", 
    idade: 1,
    sobrenome: "Oliveira"
  });

  familia[3].nome = "Valentina";

  console.log(familia);