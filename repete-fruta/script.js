const funcaoRepetir = () => {
  // Pega o nome digitado pelo usuário no campo de fruta
  let nomeFruta = document.querySelector("#input-fruta").value.trim();

  // Pega a quantidade digitada e converte para número
  let nDeRepeticoes = Number(document.querySelector("#input-repeticao").value);

  // Verifica se o nome ou a quantidade são válidos
  if (nomeFruta === "" || Number.isNaN(nDeRepeticoes) || nDeRepeticoes <= 0) {
    document.querySelector("#resultado").textContent =
      "Digite um nome e um número válido.";
    return;
  }

  // Cria uma variável para armazenar o resultado
  let resultado = "";

  // Usa um loop for para repetir o nome da fruta a quantidade informada
  for (let i = 0; i < nDeRepeticoes; i++) {
    // Adiciona a fruta ao resultado
    resultado += nomeFruta;

    // Adiciona o separador "*" entre as repetições, exceto na última
    if (i < nDeRepeticoes - 1) {
      resultado += "*";
    }
  }

  // Exibe o resultado na página
  document.querySelector("#resultado").textContent = resultado;
};

// Captura o botão e associa a função ao clique
let btn = document.querySelector("#repetir");
btn.addEventListener("click", funcaoRepetir);
