const mensagem = document.getElementById("mensagem");

// Verifica se já existe um número de visitas salvo
let visitas = localStorage.getItem("visitas");

if (visitas === null) {
  // Primeira visita
  mensagem.textContent = `Muito Bem-Vindo`;

  localStorage.setItem("visitas", 1);
} else {
  // Converter para número e soma 1
  visitas = Number(visitas) + 1;

  // Atualizar o localStorage
  localStorage.setItem("visitas", visitas);

  // Exibe a mensagem
  mensagem.textContent = `Que bom que você voltou! Esta é a sua visita de número ${visitas}.`;
}
