const nome = document.getElementById("nome");
const btnGerar = document.getElementById("btnGerar");
const resultado = document.getElementById("resultado");

// Função para validar nome
function validarNome(nomeCompleto) {
  // remove espaços extras
  let partes = nomeCompleto.trim().split(" ");

  // remove espaços vazios
  partes = partes.filter((parte) => parte !== "");

  // precisa ter pelo menos nome e sobrenome
  return partes.length >= 2;
}

// Função para obter sobrenome
function obterSobrenome(nomeCompleto) {
  let partes = nomeCompleto.trim().split(" ");

  partes = partes.filter((parte) => parte !== "");

  return partes[partes.length - 1].toLowerCase();
}

// Função para contar vogais
function contarVogais(nomeCompleto) {
  let contador = 0;

  let vogais = "aeiouáàâãéèêíìîóòôõúùû";

  for (let letra of nomeCompleto.toLowerCase()) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

// Evento do botão
btnGerar.addEventListener("click", () => {
  let nomeCompleto = nome.value.trim();

  if (!validarNome(nomeCompleto)) {
    alert("Digite nome e sobrenome");
    return;
  }

  let sobrenome = obterSobrenome(nomeCompleto);

  let quantidadeVogais = contarVogais(nomeCompleto);

  // transforma em dois dígitos
  let total = String(quantidadeVogais).padStart(2, "0");

  let senha = sobrenome + total;

  resultado.innerHTML = `
        Nome: <strong>${nomeCompleto}</strong><br>
        Senha inicial: <strong>${senha}</strong>
    `;
});
