function mostrarPromocao() {
  // 1. Referência os elementos de entrada e saída
  let inMedicamento = document.getElementById("inMedicamento");
  let inPreco = document.getElementById("inPreco");
  let outMedicamento = document.getElementById("outMedicamento");
  let outPromocao = document.getElementById("outPromocao");

  //2. Obtém os conteúdos dos campos
  let medicamento = inMedicamento.value;
  let preco = Number(inPreco.value);

  //3. Calcula o valor total da promoção com dois produtos
  let total = preco * 2;

  //4. Exibe as respostas
  outMedicamento.textContent = `Promoção de ${medicamento}`;
  outPromocao.textContent = `Leve dois por apenas R$: ${total.toFixed(2)}`;
}

// 5. Cria a referência ao botão e o ouvinte de evento
let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarPromocao);
