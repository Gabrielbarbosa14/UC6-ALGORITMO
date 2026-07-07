// Vetor que armazenará os clubes
const clubes = [];

// Selecionando elementos
const clube = document.getElementById("clube");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnGerar = document.getElementById("btnGerar");
const listaClubes = document.getElementById("listaClubes");
const listaJogos = document.getElementById("listaJogos");

// Função para adicionar clubes
btnAdicionar.addEventListener("click", () => {
  // Remove espaços vazios
  const nomeClube = clube.value.trim();

  // Verifica se o campo está vazio
  if (nomeClube === "") {
    alert("Digite um clube");
    return;
  }

  // Adiciona no vetor
  clubes.push(nomeClube);

  // Mostra os clubes cadastrados
  listaClubes.innerHTML = clubes.join(" | ");

  // Limpa input
  clube.value = "";

  // Coloca o cursor novamente no input
  clube.focus();
});

// Função para gerar tabela
btnGerar.addEventListener("click", () => {
  // Verifica se o número é ímpar
  if (clubes.length % 2 !== 0) {
    listaJogos.innerHTML =
      "Não é possível gerar tabela com quantidade ímpar de clubes.";

    return;
  }

  let jogos = "";

  // Percorre apenas metade do vetor
  for (let i = 0; i < clubes.length / 2; i++) {
    let primeiro = clubes[i];

    let ultimo = clubes[clubes.length - 1 - i];

    jogos += `${primeiro} ⚔️ ${ultimo}<br>`;
  }

  listaJogos.innerHTML = jogos;
});
