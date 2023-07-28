function calculaMedia(notas){
    const somatorio = notas.reduce((total, nota) => total + nota, 0); //0 é o valor inicial
    return somatorio / notas.length;
  }
  function obtemValores(){
    let notas = [];
    for(let i = 0; i < 3; i++){
      let nota = Number(prompt(`Digite a ${i + 1}ª nota: `));
      while(isNaN(nota)){
        nota = Number(prompt(`Dado inválido, digite a ${i + 1} nota!`));
      }
      notas.push(nota);
    }
    return notas;
  }
  
  function mostraResultados(media, valores){
    alert(`A média entre ${valores[0]}, ${valores[1]}, ${valores[2]} é de ${media}!`);
  }
  const valores = obtemValores();
  const media = calculaMedia(valores);
  const resultado = mostraResultados(media, valores);