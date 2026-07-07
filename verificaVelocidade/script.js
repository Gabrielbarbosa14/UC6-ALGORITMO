let btn = document.querySelector("#enviar");
let mensagem = document.querySelector("#mensagem");

const calcularMulta = () => {
  let input = Number(document.querySelector("#input").value);

  if (input <= 80) {
    mensagem.textContent = `Sem multa`;
  } else if (input <= 96) {
    mensagem.textContent = `Multa Leve`;
  } else {
    mensagem.textContent = `Multa Grave`;
  }
};

btn.addEventListener("click", calcularMulta);
