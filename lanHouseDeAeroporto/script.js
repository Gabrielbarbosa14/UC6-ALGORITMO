const totalPagar = () => {
  let tempoJogado = Number(document.querySelector("#tempoJogado").value);
  let valor15 = 2;
  let blocos15 = Math.ceil(tempoJogado / 15);
  let calculoFinal = blocos15 * valor15;

  const h1Resultado = document.querySelector("#valorTotal");
  h1Resultado.innerHTML = `O valor total a ser pago será de ${calculoFinal}`;
};

const calcularValor = document.querySelector("#calcularValor");
calcularValor.addEventListener("click", totalPagar);
