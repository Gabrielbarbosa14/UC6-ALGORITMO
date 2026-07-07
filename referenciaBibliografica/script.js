// Seleciona o botão
const btnGerar = document.getElementById("btnGerar");

// Evento de clique
btnGerar.addEventListener("click", gerarReferencia);

function gerarReferencia() {
  // Recebe o nome digitado e remove espaços extras
  let nome = document.getElementById("nome").value.trim();

  // Divide o nome em palavras
  let partes = nome.split(" ");

  // Pega o último elemento (sobrenome)
  let sobrenome = partes[partes.length - 1].toUpperCase();

  // Variável para armazenar iniciais
  let iniciais = "";

  // Percorre todos os nomes menos o último
  for (let i = 0; i < partes.length - 1; i++) {
    // Pega primeira letra e transforma em maiúscula
    iniciais += partes[i][0].toUpperCase() + ". ";
  }

  // Junta tudo
  let referencia = `${sobrenome}, ${iniciais}`;

  // Exibe o resultado
  document.getElementById("resultado").textContent =
    `Referência: ${referencia}`;
}
