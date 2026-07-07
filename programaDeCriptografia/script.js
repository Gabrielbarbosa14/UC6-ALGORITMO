// Selecione o botão
const btnCriptografar = document.getElementById("btnCriptografar");

// Adiciona evento de clique
btnCriptografar.addEventListener("click", criptografar);

function criptografar() {
  // Pega a mensagem
  let mensagem = document.getElementById("mensagem").value;

  //Variáveis para armazenar letras pares e ímpares
  let pares = "";
  let impares = "";

  //Percorre toda a mensagem
  for (let i = 0; i < mensagem.length; i++) {
    //Verifica se a posição é par
    if (i % 2 === 0) {
      pares += mensagem[i];
    } // Se não for par
    else {
      impares += mensagem[i];
    }
  }

  console.log(pares);
  //Junta os pares com os ímpares
  let codigo = pares + impares;

  // Exibe resultado
  document.getElementById("resultado").textContent =
    `mensagem criptografada: ${codigo}`;
}
